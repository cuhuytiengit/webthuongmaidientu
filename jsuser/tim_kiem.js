$(".search").click(function(){
    builddstimkiem();
});

function builddstimkiem(){
    var key=$(".search").val();
    var dataSend = {
        event: "timkiem",
        key:key
    }
    queryDataGET_JSON("php/tim_kiem.php", dataSend, function(res){
        console.log(res);
        buildHTMLtimkiemData(res);
    })
};

var resalltimkiem;
function buildHTMLtimkiemData(res) {
    var data = res.items;
    resalltimkiem=data;
    var stt=1;
    var html='';
    for (item in data) {
      var list=data[item];
          html=html +
          '<div class="timkiemsp">'+
          '<tr class="font_timkiem" data-maspgh='+list.masp+' data-namegh'+list.masp+'>' +
          '<td class="txtmaspgh is-hidden">' + list.masp + '</td>' +
          '<img width="70px" height="70px" src="./nuocsuoi/'+
          list.imgnuoc+'"/>&#09;<b>' + list.tensp + '</b></td>' +
          '<td class="giabangh"><b>' + list.giaban + '</b></td>'+
          '</tr>';+
          '</div>'
      stt++;
    $(".listdstimkiem").html(html);
    }
}
