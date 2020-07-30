//Tạo đối tượng service tương tác backend

var svService = new SinhVienService();

var renderSinhVien = function(){
    var promise = svService.layDanhSachSinhVien();
   promise.then(function(res){
        //Tạp <tr> table...
       //Tạo nội dung các thẻ tr
       var contentTable = '';
       for(var index = 0; index < res.data.length; index++){
           //Mỗi lần duyệt lất ra 1 đối tượng sinh viên
           var sinhVien = res.data[index];
           // từ đối tượng sinh viên tạo ra thẻ tr
           contentTable +=
            `<tr>
                <td>${sinhVien.MaSV}</td>
                <td>${sinhVien.MaSV}</td>
                <td>${sinhVien.MaSV}</td>
                <td>${sinhVien.MaSV}</td>
                <td>${sinhVien.MaSV}</td>
                <td>${sinhVien.MaSV}</td>
            </tr>`
       }
       //In ra giao diện
       document.getElementById('tblSinhVien').innerHTML = contentTable;
    }).catch(function(error){
        console.log(error.response.data)
    })

}
renderSinhVien();