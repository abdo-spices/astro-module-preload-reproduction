export default function transformImportPlugin() {
  return {
    name: 'vite-plugin-transform-import', // required, will show up in warnings and errors

    // Hook into Vite's transform process
    transform(code, id) {
      console.log(code)
      if (id.endsWith('.js')) {
        // Use a regular expression to find and transform the import
        const transformedCode = code.replace(/(\w+)\(\(\) => import\((.+?)\), \[\]\)/g, 'import($2)');
        return {
          code: transformedCode,
          map: null // if you want to support source maps, you can generate them here
        };
      }
      return null; // if no transformation is needed, return null
    }
  };
}