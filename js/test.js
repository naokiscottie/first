function ShowAlart() {
    alert("成功");
    }


function ChangeParaToDate() {
document.getElementById('eid_date').innerHTML = Date();
}


const a=['1','2','3'];

//ブートストラップの左から3番目のボタンのアラート設定
document.getElementsByTagName('button')[2].addEventListener('click',()=>{
    window.alert('test.jsにて設定しています。');
})

//その他ボタンテスト
var btn1=document.getElementById('test1')
btn1.addEventListener("click",function(){

    alert("OK　test.jsにてアラート設定しています。");
})

var btn2=document.getElementById('test2')
btn2.addEventListener("click",function(){

    window.alert("二つ目のボタンOK　test.jsにてアラート設定しています。");
})







//入力完了ボタンが押されたなら、テキストとして表示した後localstorageに保存
var btn3=document.getElementById('button_test')
btn3.addEventListener("click",function(){

    var name=document.getElementById("test_name").value;
    document.getElementById("test_display").innerText=name;
    localStorage.setItem("a",name)

})

//localstorageに保存している値を取り出して、格納しておきボタンを押したなら、前回格納していた値を表示。
var c=localStorage.getItem("a");
var btn4=document.getElementById('test3')
btn4.addEventListener("click",function(){

document.getElementById("test_display2").innerText=c;

})




//上でしている操作と同じ作業　別変数にて格納
var btn4=document.getElementById('button_test3')
btn4.addEventListener("click",function(){
    
    var name1=document.getElementById("test_name3").value;
    document.getElementById("test_display3").innerText=name1;
    localStorage.setItem("b",name1);
})

var d=localStorage.getItem("b");
var btn4=document.getElementById('test6')
btn4.addEventListener("click",function(){

document.getElementById("test_display6").innerText=d;

})

//テキストボックスからの入力による配列の作成
var hairetsu_input=[];
var btn_hairetsu=document.getElementById('hairetsu_input_finish')
btn_hairetsu.addEventListener("click",function(){
    
    var new_value_hairetsu=document.getElementById("hairetsu_input_box").value;
    hairetsu_input.push(new_value_hairetsu);
    document.getElementById("hairetsu_input_box").value='';

    
})



//ローカルストレージへの配列の保存

var btn_hairetsu_kakunou=document.getElementById('hairetsu_kakunou')
btn_hairetsu_kakunou.addEventListener("click",function(){
    
    console.log(hairetsu_input)
    localStorage.setItem('hairetsu_localstorage',JSON.stringify(hairetsu_input));
    
})

//ローカルストレージの配列を表示
var btn_hairetsu=document.getElementById('hairetsu_id')
btn_hairetsu.addEventListener("click",function(){

    var hairetsu2=localStorage.getItem('hairetsu_localstorage');
    hairetsu2=JSON.parse(hairetsu2);
    document.getElementById("test_display_hairetsu").innerText=hairetsu2;
    var hairetsu_display_element=document.getElementById('hairetsu_display');

    //既に表示されている子要素の削除
    if (hairetsu_display_element.hasChildNodes()){
        var hairetsu_length=hairetsu_display_element.childElementCount;
        console.log(hairetsu_length);
		
        for (var i = 0; i < hairetsu_length; i++){
        hairetsu_display_element.removeChild(hairetsu_display_element.firstChild)
        }
    
    }


    for (var i = 0; i < hairetsu2.length+1; i++) {
　　    var new_element=document.createElement('p');
        new_element.textContent=hairetsu2[i];
        hairetsu_display_element.appendChild(new_element);
    }
})


