var protocal =window.location.protocol;
var hostname_hwe = window.location.host;
var hostname = hostname_hwe.replace('www.','');
if(hostname_hwe.indexOf('www') != -1){
     var path = protocal+"//"+hostname;

  window.location.href  =  path;

}
if(hostname == 'localhost:3000'){
    
    var path = protocal+"//vroomwheel.com";

}else{
     var path = protocal+"//"+hostname;
}

// export const BaseUrl = protocal+"//303mb.com/ready/vroomwheel";
export const BaseUrl = path;
