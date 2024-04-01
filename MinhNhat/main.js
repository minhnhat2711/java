const food = [
  {
    id: 1,
    name: "Hàu nưóng phô mai",
    image: "./img/haunuong.jpg",
    price: "280 $",
    quantity: "99",
    detail: "<br> hàu : <br>  hàu lại là nguồn cung cấp nhiều dưỡng chất tốt cho sức khỏe, bao gồm protein, chất béo lành mạnh, vitamin và các khoáng chất thiết yếu."

  },

  {
    id: 2,
    name: "Thịt ba chỉ nướng",
    image: "./img/thitbachi.jpg",
    price: "100 $",
    quantity: "99",
    detail: "<br> thịt ba chỉ nướng : <br> Thịt ba chỉ nướng là một món ăn từ Việt Nam, được làm từ thịt lợn cắt thành từng lát mỏng, có lớp mỡ ở giữa. Thường thì thịt ba chỉ được ướp gia vị như muối, tiêu, tỏi và các loại gia vị khác, sau đó được nướng trên lửa than hoặc lò nướng cho đến khi thịt chín và có màu vàng đẹp."
  },

  {
    id: 3,
    name: "Trứng Ốp La",
    image: "./img/trungopla.jpg",
    price: "5 $",
    quantity: "99",
    detail: "<br> trứng ốp la : <br> Trứng ốp la là một món ăn phổ biến trong ẩm thực Việt Nam và nhiều nền văn hóa ẩm thực khác trên thế giới. Món này bao gồm trứng gà được rán hoặc chiên trong dầu mỡ cho đến khi lòng đỏ còn nguyên vẹn, còn lòng trắng đã đặc chắc."
  },

  
];
const drink = [
  {
    id: 1,
    name: "Nước Táo",
    image: "./img/tao.jpg",
    price: "20 $",
    quantity: "99",
    detail: "<br> nước táo : <br> Nước táo là một loại nước ép được làm từ trái táo. Quá trình làm nước táo thường bắt đầu bằng việc lựa chọn táo tươi, rửa sạch và cắt thành miếng nhỏ. Sau đó, miếng táo được đưa vào máy ép hoặc máy xay để lấy nước."
  },

  {
    id: 2,
    name: "Nước Dừa ",
    image: "./img/dua.jpg",
    price: "10 $",
    quantity: "99",
    detail: "<br> nước dừa : <br> Nước dừa là nước được lấy từ trái dừa, một loại quả phổ biến trong nhiều khu vực nhiệt đới trên thế giới. Quá trình làm nước dừa thường bắt đầu bằng việc chọn lựa trái dừa non và tươi, sau đó mở trái dừa và lấy nước bên trong."
  },

  {
    id: 3,
    name: "Trà Sữa",
    image: "./img/trasua.jpg",
    price: "12 $",
    quantity: "99",
    detail: "<br> trà sữa : <br> Trà sữa là một loại đồ uống phổ biến trong ẩm thực Đài Loan và đã lan rộng ra nhiều quốc gia trên thế giới. Đây là một sự kết hợp giữa trà và sữa, thường được phục vụ với đá và có thêm hương vị từ đường hoặc các loại siro, tùy thuộc vào khẩu vị cá nhân."
  },

];

function Food() {
  var html = "";
  for (i in food) {
    html + "<tr>";
    html += "<td>" + food[i].id + "</td>";
    html += "<td>" + food[i].name + "</td>";
    html +=
      "<td><img src=" + food[i].image + " style=height:50px;width:50px></td>";
    html += "<td>" + food[i].price + "</td>";
    html += "<td>" + food[i].quantity + "</td>";
    html += "<td><button class='edit-btn' onclick='editProductFood(" + i + ")'>Edit</button></td>";
    html += "<td><button class='delete-btn' onclick='confirmDeleteFromFood(" + i + ")'>Delete</button></td>";
    html += "<td><button class='detail-btn' onclick='DetailProduct(" + i + ")'>Detail</button></td>";
    html += "</tr>";
    document.getElementById("tbl").innerHTML = html;
  }
}
function Drink() {
  var html = "";
  for (i in drink) {
    html + "<tr>";
    html += "<td>" + drink[i].id + "</td>";
    html += "<td>" + drink[i].name + "</td>";
    html +=
      "<td><img src=" + drink[i].image + " style=height:50px;width:50px></td>";
    html += "<td>" + drink[i].price + "</td>";
    html += "<td>" + drink[i].quantity + "</td>";
    html += "<td><button class='edit-btn' onclick='editProductDrink(" + i + ")'>Edit</button></td>";
    html += "<td><button class='delete-btn' onclick='confirmDeleteFromDrink(" + i + ")'>Delete</button></td>";
    html += "<td><button class='detail-btn' onclick='DetailProduct(" + i + ")'>Detail</button></td>";
    html += "</tr>";
  }

  document.getElementById("tbl").innerHTML = html;
}

function create() {
  var ID = document.getElementById("id").value;
  var Name = document.getElementById("name").value;
  var Image = document.getElementById("img").value;
  var Price = document.getElementById("price").value;
  var Quantity = document.getElementById("quantity").value;
  var Select = document.getElementById("Select").value;
  var Detail = document.getElementById("detail").value;

  var newProduct = {
    id: ID,
    name: Name,
    image: Image,
    price: Price,
    quantity: Quantity,
    detail:Detail,
  };

  if (Select === "food") {
    food.push(newProduct);
  } else if (Select === "drink") {
    drink.push(newProduct);
  }

  document.getElementById("id").value = "";
  document.getElementById("name").value = "";
  document.getElementById("img").value = "";
  document.getElementById("price").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("detail").value = "";

  show(Select === "food" ? arr : drink);
}

function editProductFood(index) {
  document.getElementById("editProductName").value = food[index].name;
  document.getElementById("editProductImage").value = food[index].image;
  document.getElementById("editProductPrice").value = food[index].price;
  document.getElementById("editProductQuantity").value = food[index].quantity;
  document.getElementById("editProductDetail").value = food[index].detail;
  document.getElementById("editForm").style.display = "block";
  document.getElementById("editIndex").value = index;
}
function editProductDrink(index) {
  document.getElementById("editProductName").value = drink[index].name;
  document.getElementById("editProductImage").value = drink[index].image;
  document.getElementById("editProductPrice").value = drink[index].price;
  document.getElementById("editProductQuantity").value = drink[index].quantity;
  document.getElementById("editProductDetail").value = drink[index].detail;
  document.getElementById("editForm").style.display = "block";
  document.getElementById("editIndex").value = index;
}
function updateProduct() {
  var newName = document.getElementById("editProductName").value;
  var newImage = document.getElementById("editProductImage").value;
  var newPrice = document.getElementById("editProductPrice").value;
  var newQuantity = document.getElementById("editProductQuantity").value;
  var newDetail=document.getElementById("editProductDetail").value;

  var indexToUpdate = parseInt(
    document.getElementById("editIndex").value
  );

  
  if (food[indexToUpdate]) {
    food[indexToUpdate].name = newName;
    food[indexToUpdate].image = newImage;
    food[indexToUpdate].price = newPrice;
    food[indexToUpdate].quantity = newQuantity;
    food[indexToUpdate].detail = newDetail;
    Food(); // Cập nhật danh sách thức ăn
  } else if (drink[indexToUpdate]) {
    drink[indexToUpdate].name = newName;
    drink[indexToUpdate].image = newImage;
    drink[indexToUpdate].price = newPrice;
    drink[indexToUpdate].quantity = newQuantity;
    drink[indexToUpdate].detail = newDetail;
    Drink(); // Cập nhật danh sách đồ uống
  }

  document.getElementById("editForm").style.display = "none";
  Food();
}

function DetailProduct(index) {
  // Lấy chi tiết sản phẩm dựa trên chỉ số hoặc bất kỳ định danh nào khác
  var element = document.getElementById("editProductDetail");// Thay getProductDetails bằng logic của riêng bạn

  // Tạo một chuỗi đại diện cho nội dung HTML để hiển thị chi tiết sản phẩm
  var html = "<h2>CHI TIẾT SẢN PHẨM</h2>";
  html += "<p><strong>Chi tiết:</strong> " + element.value + "</p>";
  document.getElementById('modal').innerHTML = html;
  document.getElementById('modal').style.display = 'block';
}
function confirmDeleteFromFood(index) {
  // Xác nhận việc xóa sản phẩm từ danh sách FOOD
  if (confirm("Confirm removal from FOOD list by ID: " + food[index].id + "?")) {
    // Xóa sản phẩm khỏi mảng 'food'
    food.splice(index, 1);
    // Cập nhật bảng sản phẩm Food
    Food();
  }
}
function confirmDeleteFromDrink(index) {
  if (confirm("Confirm removal from DRINK list by ID: " + drink[index].id + "?")) {
    drink.splice(index, 1);
    Drink();
  }
}


function search() {
  var keyword = document.getElementById("searchInput").value;
  searchProduct(keyword);
}

function searchProduct(keyword) {
  var searchResults = [];
  for (var i = 0; i < food.length; i++) {
    if (food[i].name.toLowerCase().includes(keyword.toLowerCase())) {
      searchResults.push(food[i]);
    }
  }
  for (var i = 0; i < drink.length; i++) {
    if (drink[i].name.toLowerCase().includes(keyword.toLowerCase())) {
      searchResults.push(drink[i]);
    }
  }
  displaySearchResults(searchResults);
}

function displaySearchResults(results) {
  var html = "";
  for (var i = 0; i < results.length; i++) {
    html += "<tr>";
    html += "<td>" + results[i].id + "</td>";
    html += "<td>" + results[i].name + "</td>";
    html += "<td><img src='" + results[i].image + "' style='height:50px;width:50px;'></td>";
    html += "<td>" + results[i].price + "</td>";
    html += "<td>" + results[i].quantity + "</td>";
    html += "<td><button class='edit-btn' onclick='editProduct(" + i + ")'>Edit</button></td>";
    html += "<td><button class='delete-btn' onclick='confirmDelete(" + i + ")'>Delete</button></td>";
    html += "<td><button class='detail-btn' onclick='editProduct(" + i + ")'>Detail</button></td>";
    html += "</tr>";
  }
  document.getElementById("tbl").innerHTML = html;
}


