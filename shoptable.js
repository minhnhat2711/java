var man = [
    {
        id : 1,
        name : "Quan jean nam",
        code : "KG0002",
        newprice : 260000,
        oldprice : 360000,
        image:"https://oldsailor.com.vn/vnt_upload/product/09_2022/6587ee02d79c13c24a8d13.jpg"
    },
    {
        id : 2,
        name : "Ao khoac nam",
        code : "VN0006",
        newprice : 249000,
        oldprice : 349000,
        image:"https://bizweb.dktcdn.net/100/287/440/products/ao-khoac-nam-kaki-dep-local-brand-2.jpg?v=1628678692670"
    },
    {
        id : 3,
        name : "Ao phong nam",
        code : "US0001",
        newprice : 160000,
        oldprice : 360000,
        image:"https://product.hstatic.net/200000255805/product/tai_xuong_-_2023-05-30t164439.314_03fd5eafdd774a7d8dac28da18530830_master.jpg"
    },
    {
        id : 4,
        name : "Ao cosmo nam",
        code : "US0001",
        newprice : 260000,
        oldprice : 360000,
        image:"https://media.sellycdn.net/files/md_2022_05_10_07_54_28_0700_utQmDTGcCJ.jpg"
    }
]
var women = [
    {
        id : 1,
        name : "Quan jean nu",
        code : "KR0004",
        newprice : 250000,
        oldprice : 350000,
        image:"https://dosi-in.com/file/detailed/468/dosiin-dkmv-quan-jean-nu-ong-rong-lung-cao-tron-dkmv-mau-xanh-dam-quan-bo-nu-skinny-blue-468936468936.jpg?w=670&h=670&fit=fill&fm=webp"
    },
    {
        id : 2,
        name : "Ao khoac nu",
        code : "VN0009",
        newprice : 239000,
        oldprice : 339000,
        image:"https://zizoou.com/cdn/shop/products/Ao-khoac-jacket-form-rong-oversize-7-6-Ao-khoac-trang-be-ZiZoou-Store_de69df3e-1358-47b4-a3cf-6ed5a99b7782.jpg?v=1677890431"
    },
    {
        id : 3,
        name : "Ao phong nu",
        code : "US0002",
        newprice : 110000,
        oldprice : 310000,
        image:"https://salt.tikicdn.com/cache/w1200/ts/product/cb/d2/a0/c2bd00e68910e5162272f0dc2ef165f1.jpg"
    },
    {
        id : 4,
        name : "Vay nu",
        code : "US0002",
        newprice : 110000,
        oldprice : 310000,
        image:"https://img.lazcdn.com/g/p/914b7405b89852e338c1e4234e8d94d2.jpg_720x720q80.jpg"
    }
]

function listtable(){
    var demo='';
    for(var i in man ){
        demo += "<tr>";
        demo += "<td>"+man[i].id+"</td>"
        demo += "<td>"+man[i].name+"</td>"
        demo += "<td>"+man[i].code+"</td>"
        demo += "<td><img src= "+man[i].image+"></td>"
        demo += "<td>"+man[i].newprice+"</td>"
        demo +="</tr>";
        console.log(demo);
        document.getElementById("tbl").innerHTML = demo;
    }
    var demo1='';
    for(var i in women ){
        var n  =i;
        demo1 += "<tr>";
        demo1 += "<td>"+women[i].id+"</td>"
        demo1 += "<td>"+women[i].name+"</td>"
        demo1 += "<td>"+women[i].code+"</td>"
        demo1 += "<td><img src= "+women[i].image+"></td>"
        demo1 += "<td>"+women[i].newprice+"</td>"
        demo1 +="</tr>";
        console.log(demo1);
        document.getElementById("tbl1").innerHTML = demo1;
    }

}
function order(){
   alert("mua thành công");
}