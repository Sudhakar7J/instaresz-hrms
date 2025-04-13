"use client";

import { useCallback, useEffect } from "react";
import ReactFlow, {
  Node,
  Edge,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  MarkerType,
  NodeChange,
  EdgeChange,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";
import "@reactflow/core/dist/style.css";
import "@reactflow/controls/dist/style.css";
import { Box, Typography, Paper, Avatar, styled } from "@mui/material";

// Define the data interface for organization chart nodes
interface OrgChartMember {
  id: string;
  name: string;
  position: string;
  department?: string;
  avatar?: string;
  children?: OrgChartMember[];
}

interface OrgChartProps {
  data: OrgChartMember;
  departmentColors: Record<string, string>;
}

interface CustomNodeData {
  name: string;
  position: string;
  avatar: string;
  isCompact: boolean;
  departmentColor?: string;
}

interface DepartmentHeaderData {
  department: string;
  backgroundColor: string;
}

// Custom node component
const CustomNode = ({ data }: { data: CustomNodeData }) => {
  return (
    <Paper
      elevation={2}
      sx={{
        padding: 1,
        borderRadius: "8px",
        width: data.isCompact ? "150px" : "200px",
        backgroundColor: "white",
        border: "1px solid #e0e0e0",
        "&:hover": {
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          zIndex: 999,
        },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: data.isCompact ? 0 : 1,
        }}
      >
        <Avatar
          src={data.avatar || ""}
          alt={data.name}
          sx={{
            width: data.isCompact ? 30 : 40,
            height: data.isCompact ? 30 : 40,
            marginRight: 1,
            border: data.departmentColor
              ? `2px solid ${data.departmentColor}`
              : "none",
          }}
        />
        <Box>
          <Typography
            variant={data.isCompact ? "caption" : "subtitle2"}
            sx={{
              fontWeight: 600,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {data.name}
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              fontSize: data.isCompact ? "0.65rem" : "0.75rem",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "block",
            }}
          >
            {data.position}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

// Custom department header component
const DepartmentHeader = ({ data }: { data: DepartmentHeaderData }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        padding: "8px 16px",
        borderRadius: "24px",
        minWidth: "180px",
        backgroundColor: data.backgroundColor || "#5271ff",
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
        {data.department}
      </Typography>
    </Paper>
  );
};

// Define node types for the ReactFlow component
const nodeTypes = {
  customNode: CustomNode,
  departmentHeader: DepartmentHeader,
};

// Container styling
const FlowContainer = styled(Box)({
  width: "100%",
  height: "calc(100vh - 220px)",
  minHeight: "550px",
  background: "#f5f7fa",
  backgroundImage: "radial-gradient(#e0e0e0 1px, transparent 1px)",
  backgroundSize: "20px 20px",
  overflow: "hidden",
  position: "relative",
  "& .react-flow__edge": {
    zIndex: 5,
  },
  "& .react-flow__edge-path": {
    stroke: "#555",
    strokeWidth: 3,
  },
  "& .react-flow__node": {
    zIndex: 2,
  },
});

const OrgChartComponent = ({ data, departmentColors }: OrgChartProps) => {
  const [nodes, setNodes] = useNodesState([]);
  const [edges, setEdges] = useEdgesState([]);

  // Process organization data into nodes and edges for ReactFlow
  const processOrgData = useCallback(() => {
    // Calculate total width needed based on organization complexity
    const totalDepartments = data.children?.length || 0;
    const maxMembersInAnyDept =
      data.children?.reduce((max, dept) => {
        const deptSize = dept.children?.length || 0;
        return Math.max(max, deptSize);
      }, 0) || 0;

    const baseWidth = Math.max(
      1000,
      totalDepartments * 300,
      maxMembersInAnyDept * 200
    );
    const newNodes: Node[] = [];
    const newEdges: Edge[] = [];
    let yOffset = 0;

    // Add the CEO node (root node)
    newNodes.push({
      id: data.id,
      type: "customNode",
      position: { x: baseWidth / 2, y: 0 },
      data: {
        name: data.name,
        position: data.position,
        avatar: "",
        isCompact: false,
      },
      draggable: true,
    });

    yOffset += 100;

    if (data.children) {
      const departmentWidth = baseWidth / data.children.length;

      // Add department header nodes and connect to CEO
      data.children.forEach((department, index) => {
        const xPos = index * departmentWidth + departmentWidth / 2;

        // Department header node
        const departmentId = `dept-${department.id}`;
        newNodes.push({
          id: departmentId,
          type: "departmentHeader",
          position: { x: xPos, y: yOffset },
          data: {
            department: department.department,
            backgroundColor:
              departmentColors[department.department || ""] || "#5271ff",
          },
          draggable: true,
        });

        // Connect CEO to department
        newEdges.push({
          id: `edge-${data.id}-${departmentId}`,
          source: data.id,
          target: departmentId,
          type: "step",
          style: {
            stroke: departmentColors[department.department || ""] || "#5271ff",
            strokeWidth: 3,
          },
          markerEnd: {
            type: MarkerType.ArrowClosed,
            color: departmentColors[department.department || ""] || "#5271ff",
          },
          zIndex: 5,
        });

        // Process department members
        if (department.children) {
          processMembers(
            department.children,
            departmentId,
            xPos,
            yOffset + 80,
            departmentWidth,
            department.department || "",
            newNodes,
            newEdges,
            0
          );
        }
      });
    }

    setNodes(newNodes);
    setEdges(newEdges);
  }, [data, departmentColors, setNodes, setEdges]);

  // Helper function to recursively process members at any level
  const processMembers = (
    members: OrgChartMember[],
    parentId: string,
    parentX: number,
    yPos: number,
    width: number,
    department: string,
    nodesAccumulator: Node[],
    edgesAccumulator: Edge[],
    depth: number
  ) => {
    if (members.length > 0) {
      const actualWidth = width * (1 - depth * 0.1);
      const memberWidth = actualWidth / members.length;
      const departmentColor = departmentColors[department] || "#5271ff";

      members.forEach((member, index) => {
        const xPos =
          parentX - actualWidth / 2 + memberWidth / 2 + index * memberWidth;
        const memberId = member.id;
        const isCompact = depth > 0;

        // Add member node
        nodesAccumulator.push({
          id: memberId,
          type: "customNode",
          position: { x: xPos, y: yPos },
          data: {
            name: member.name,
            position: member.position,
            avatar: "",
            departmentColor,
            isCompact,
          },
          draggable: true,
        });

        // Connect to parent
        edgesAccumulator.push({
          id: `edge-${parentId}-${memberId}`,
          source: parentId,
          target: memberId,
          type: "step",
          style: {
            stroke: departmentColor,
            strokeWidth: 3,
          },
          markerEnd: {
            type: MarkerType.ArrowClosed,
            color: departmentColor,
          },
          zIndex: 5,
        });

        // Process children recursively
        if (member.children && member.children.length > 0) {
          processMembers(
            member.children,
            memberId,
            xPos,
            yPos + (isCompact ? 70 : 90),
            memberWidth,
            department,
            nodesAccumulator,
            edgesAccumulator,
            depth + 1
          );
        }
      });
    }
  };

  useEffect(() => {
    processOrgData();
  }, [processOrgData]);

  // Handle node changes (drag and drop)
  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );

  // Handle edge changes
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  // Handle connections between nodes
  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  // Update edge configuration
  const defaultEdgeOptions = {
    type: "smoothstep",
    style: {
      strokeWidth: 3,
      stroke: "#555",
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 25,
      height: 25,
      color: "#555",
    },
  };

  return (
    <FlowContainer>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        minZoom={0.2}
        maxZoom={1.5}
        defaultViewport={{ x: 0, y: 0, zoom: 0.7 }}
        snapToGrid
        snapGrid={[10, 10]}
        defaultEdgeOptions={defaultEdgeOptions}
        elementsSelectable={true}
        nodesDraggable={true}
        nodesConnectable={true}
        connectionLineStyle={{ stroke: "#555", strokeWidth: 3 }}
      >
        <Controls showInteractive={true} />
      </ReactFlow>
    </FlowContainer>
  );
};

export default OrgChartComponent;
