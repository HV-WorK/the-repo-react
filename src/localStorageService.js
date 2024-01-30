const localStorageService = {
    saveTreeData: function(treeData) {
      localStorage.setItem('treeData', JSON.stringify(treeData));
    },
    getTreeData: function() {
      const data = localStorage.getItem('treeData');
      return data ? JSON.parse(data) : null; // Return null or a default tree structure if nothing is in storage
    },
    // Add more functions as needed for other types of data
  };
  
  export default localStorageService;
  