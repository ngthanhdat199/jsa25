async function nauBuaAn() {
    console.log("Bắt đầu nấu bữa ăn!");
    await batNoiCom(); // Đợi cơm nấu xong
    await chienCa(); // Đợi cá chiên xong
    await nauCanh(); // Đợi canh nấu xong
  }
  
  nauBuaAn();
  

  // Hàm giả lập bật nồi cơm (mất 3 giây)
function batNoiCom() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Nồi cơm đã nấu xong!");
        resolve(); // Công việc xong, gọi resolve
      }, 3000); // 3 giây
    });
  }
  
  // Hàm giả lập chiên cá (mất 2 giây)
  function chienCa() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Cá đã chiên xong!");
        resolve();
      }, 2000); // 2 giây
    });
  }
  
  // Hàm giả lập nấu canh (mất 1 giây)
  function nauCanh() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Canh đã nấu xong!");
        resolve();
      }, 1000); // 1 giây
    });
  }
  