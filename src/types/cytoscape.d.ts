export {};

declare module "cytoscape" {
   interface ElkLayoutOptions extends BaseLayoutOptions, AnimatedLayoutOptions {
      nodeDimensionsIncludeLabels?: boolean;
      fit?: boolean;
      padding?: number;
      animate?: boolean;
      // animateFilter: function( node, i ){ return true; },
      animationDuration?: number;
      // animationEasing: undefined,
      // transform: function( node, pos ){ return pos; },
      // ready: undefined,
      // stop: undefined,
      // nodeLayoutOptions: undefined,
      elk: {
         // All options are available at http://www.eclipse.org/elk/reference.html
         //
         // 'org.eclipse.' can be dropped from the identifier. The subsequent identifier has to be used as property key in quotes.
         // E.g. for 'org.eclipse.elk.direction' use:
         // 'elk.direction'
         //
         // Enums use the name of the enum as string e.g. instead of Direction.DOWN use:
         // 'elk.direction': 'DOWN'
         //
         // The main field to set is `algorithm`, which controls which particular layout algorithm is used.
         // Example (downwards layered layout):
         algorithm: string;
         "elk.direction": string;
         [key: string]: unknown;
      };
      // priority: function( edge ){ return null; },
   }

   type LayoutOptions =
      | NullLayoutOptions
      | RandomLayoutOptions
      | PresetLayoutOptions
      | GridLayoutOptions
      | CircleLayoutOptions
      | ConcentricLayoutOptions
      | BreadthFirstLayoutOptions
      | CoseLayoutOptions
      | ElkLayoutOptions
      | BaseLayoutOptions;
}
