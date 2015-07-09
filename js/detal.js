	var myScroll1;
  events()
  myScroll1=new iScroll('wrapper',{
       	  onBeforeScrollStart:function(e){
       	  	 var ele=e.target.tagName.toLowerCase();
       	  	 if(ele!='input' && ele!='textarea' && ele!='select'){
                   e.preventDefault();
       	  	 }
           },
	           checkDOMChanges:true,
	           fadeScrollbar:true
	       });


function events(){
  bindevent()
}


function bindevent(){
  $('#tabone').on('click','h1',function(){
    var index=$(this).index()
    $('#tabone p').css({'left':index*50+'%'})
    $(this).addClass('curh').siblings().removeClass('curh')
    $('#tconts>div').eq(index).addClass('show').siblings().removeClass('show')
  })
}