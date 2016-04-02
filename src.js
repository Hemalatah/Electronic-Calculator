var stack = [];
var out = [],opr,res;
$(document).ready(function(){
  $('button').click(function(){
    var x = $(this).attr('id');
    if($.isNumeric(x)) {
      stack.push(x);
    }
    else if(x=='.') {
      stack.push(x);
    }
    else if(x=='ce') {
      stack.pop();
    }
    else if(x =='ac') {
      stack.splice(0,stack.length);
    }
    else if(x=='=') {
      opr = out.pop();
      var a = stack.splice(0,stack.indexOf(opr));
      a = a.join('');
      var b = stack.splice(stack.indexOf(opr)+1,stack.length);
      b = b.join('');
      stack.pop();
      if(opr == '+') {
        res = parseFloat(a)+parseFloat(b); 
      }
      else if(opr == '-') {
        res = parseFloat(a)-parseFloat(b);
      }
      else if(opr == '*') {
        res = parseFloat(a)*parseFloat(b);
      }
      else if(opr == '/') {
        res = parseFloat(a)/parseFloat(b);
      }
      else if(opr == '%') {
        res = parseFloat(a)%parseFloat(b);
      }
      stack.push(res);
    }
    //for operators
    else {
      out.push(x);
      stack.push(x); 
    }
    $('#val').val(stack.join(''));
  });  
});