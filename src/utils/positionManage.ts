const POSITIONS_KEY = "topology-positions";

// Сохранение позиций
export const savePositions = (cy: cytoscape.Core) => {
   const positions: Record<string, cytoscape.Position> = {};
   cy.nodes().forEach(node => {
      positions[node.id()] = node.position();
   });
   localStorage.setItem(POSITIONS_KEY, JSON.stringify(positions));
};

// Загрузка позиций
export const loadPositions = (): Record<string, cytoscape.Position> | null => {
   const saved = localStorage.getItem(POSITIONS_KEY);
   return saved ? JSON.parse(saved) : null;
};
