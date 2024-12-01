import * as d3 from "d3";
import React, { useEffect, useRef, useState } from "react";

const Page3 = () => {
  const svgRef = useRef();
  const [isVisible, setIsVisible] = useState(false); // Track if page is in view
  const simulationRef = useRef(null); // Reference to store the simulation instance
  const shakeTimeoutRef = useRef(null); // Reference for shake timeout

  useEffect(() => {
    const centralNodeName = "profile"; // Dynamic central node name

    const width = 800;
    const height = 600;

    // Load drag sound
    const dragSound = new Audio("drag-sound.mp3"); // Replace with your actual sound file path

    // Define the nodes
    const nodes = [
      { id: centralNodeName, radius: 40 },
      { id: "HTML", radius: 20 },
      { id: "CSS", radius: 20 },
      { id: "JavaScript", radius: 30 },
      { id: "React JS", radius: 25 },
      { id: "Node JS", radius: 25 },
      { id: "Python", radius: 30 },
      { id: "Django", radius: 20 },
      { id: "Flask", radius: 20 },
      { id: "C++", radius: 25 },
      { id: "Java", radius: 25 },
      { id: "Spring", radius: 20 },
      { id: "Hibernate", radius: 20 },
    ];

    // Define the links with reduced distances (30% reduction)
    const links = [
      { source: centralNodeName, target: "HTML", distance: 60 },
      { source: centralNodeName, target: "CSS", distance: 60 },
      { source: centralNodeName, target: "JavaScript", distance: 40 },
      { source: "JavaScript", target: "React JS", distance: 40 },
      { source: "JavaScript", target: "Node JS", distance: 45 },
      { source: centralNodeName, target: "Python", distance: 40 },
      { source: "Python", target: "Django", distance: 35 },
      { source: "Python", target: "Flask", distance: 44 },
      { source: centralNodeName, target: "C++", distance: 77 },
      { source: centralNodeName, target: "Java", distance: 54 },
      { source: "Java", target: "Spring", distance: 30 },
      { source: "Spring", target: "Hibernate", distance: 50 },
    ];

    const svg = d3.select(svgRef.current);

    const initializeSimulation = () => {
      // Clean up the SVG content before rendering
      svg.selectAll("*").remove();

      // Create simulation
      simulationRef.current = d3
        .forceSimulation(nodes)
        .force(
          "link",
          d3
            .forceLink(links)
            .id((d) => d.id)
            .distance((d) => d.distance)
        )
        .force("charge", d3.forceManyBody().strength(-500))
        .force("center", d3.forceCenter(width / 2, height / 2));

      // Draw links
      const link = svg
        .append("g")
        .selectAll("line")
        .data(links)
        .join("line")
        .attr("stroke", "#999")
        .attr("stroke-opacity", 0.9)
        .attr("stroke-width", 2);

      // Draw nodes
      const node = svg
        .append("g")
        .selectAll("g")
        .data(nodes)
        .join("g")
        .call(
          d3
            .drag()
            .on("start", (event, d) => {
              if (!event.active)
                simulationRef.current.alphaTarget(0.3).restart();
              d.fx = d.x;
              d.fy = d.y;
              dragSound.play(); // Play sound on drag start
            })
            .on("drag", (event, d) => {
              d.fx = event.x;
              d.fy = event.y;
              dragSound.play(); // Play sound during dragging
            })
            .on("end", (event, d) => {
              if (!event.active) simulationRef.current.alphaTarget(0);
              d.fx = null;
              d.fy = null;
            })
        );

      node
        .append("circle")
        .attr("r", (d) => d.radius)
        .attr("fill", (d) => (d.id === centralNodeName ? "#ff6347" : "#69b3a2"))
        .attr("stroke", "#000")
        .attr("stroke-width", 1);

      node
        .append("text")
        .text((d) => d.id)
        .attr("font-family", "Arial")
        .attr("font-size", "14px")
        .attr("fill", "white")
        .style("text-anchor", "middle")
        .style("alignment-baseline", "central");

      // Simulation tick handler
      simulationRef.current.on("tick", () => {
        link
          .attr("x1", (d) => d.source.x)
          .attr("y1", (d) => d.source.y)
          .attr("x2", (d) => d.target.x)
          .attr("y2", (d) => d.target.y);

        node.attr("transform", (d) => `translate(${d.x},${d.y})`);
      });
    };

    const handleIntersection = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true); // Page is visible
        initializeSimulation(); // Reinitialize simulation when page is in view
        triggerShake(); // Trigger the shake animation
      } else {
        setIsVisible(false); // Page is not visible
        if (simulationRef.current) {
          simulationRef.current.stop(); // Stop simulation if not in view
        }
      }
    };

    // Create IntersectionObserver to detect when Page3 is in view
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the page is in view
    });

    observer.observe(svgRef.current);

    return () => {
      observer.disconnect(); // Clean up the observer on unmount
      if (simulationRef.current) {
        simulationRef.current.stop(); // Stop simulation on unmount
      }
      svg.selectAll("*").remove(); // Clean up the SVG content
    };
  }, []);

  const triggerShake = () => {
    const svgElement = svgRef.current;
    svgElement.classList.add("shake");
    // Remove the class after animation completes
    if (shakeTimeoutRef.current) {
      clearTimeout(shakeTimeoutRef.current);
    }
    shakeTimeoutRef.current = setTimeout(() => {
      svgElement.classList.remove("shake");
    }, 500); // Duration of the shake effect
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-indigo-600 to-blue-400">
      <div className="max-w-5xl w-full p-10 bg-white shadow-xl rounded-2xl border-2 border-indigo-400 overflow-hidden">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8 tracking-tight">
          Tech Skills Graph
        </h2>
        <div className="relative border-4 border-indigo-300 rounded-lg p-4">
          <svg ref={svgRef} width="800" height="600"></svg>
        </div>
      </div>
    </div>
  );
};

export default Page3;
