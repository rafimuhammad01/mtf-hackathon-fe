var currPage = 0; //month
        var year ;
        var day;
    
        function getVal(e)
        {
           day = document.getElementById(e.id).value;
           console.log(year +"/"+  (currPage + 1)  + "/" + day);
        }
    
    
        $(document).ready(function(){
            getDays(0);
              
            
        
    
    
          $("#next-month").click(function(){
            if(currPage < 12)
            {
              currPage =  currPage+1;
              getDays(currPage);
            }
    
          });
    
          $("#prev-month").click(function(){
    
              if(currPage > 0)
              {
                currPage =  currPage-1;
                getDays(currPage);
              }
          });
    
    
          $("#next-y").click(function(){
    
            $("#year").text(  parseInt($("#year").text())  + 1   )  ;
            getDays(currPage);
          });
    
    
          $("#prev-y").click(function(){
    
          $("#year").text(  parseInt($("#year").text())  - 1   )  ;
              getDays(currPage);
    
          });			
    
          
    
          function getDays(month)
          {
    
            $("#dt-able").empty();
            var mos=['January','February','March','April','May','June','July','August','September','October','Novemeber','Decemeber']
            var day=['M', 'S', 'S', 'R' , 'K', 'J', 'S']
            year = parseInt($("#year").text());
    
            $("#month-title").html(mos[month]);
    
            $("#day_val").append('<tr>');
            for(i = 0; i < 7; i++)
            {
    
              $('#dt-able').append("<th id='dt-head' class='text-center py-2'>"  + day[i] + "</th>");
            }
    
            $("#dt-able").append('</td>');
    
            var firstDay = new Date(year,month, 1);
            var lastDay = new Date(year, month+1, 0);
            
    
        
            var offset = firstDay.getDay();
    
            var dayCount = 1;
            for (i = 0; i < 5; i++)
            {
              $('#dt-able').append("<tr id=row-"+ i +">");
              for(rw = 0; rw < 7; rw++ )
              {
                if(offset == 0)
                {
    
                  $('#' + "row-"+ i).append("<td  id='"  + "cell-" + dayCount+ "'>"
                   +   "<input type='button' id ='day_val" +dayCount +"'"+   " onclick='getVal(this)' value= '" +  dayCount + "' >"  + 
                     
                   '</td>' );
                  
    
                  if(dayCount >= lastDay.getDate())
                  {
                    break;
                  }
                  dayCount++;
                }else
                {
                  $('#' + "row-"+ i).append('<td>' +'</td>' );
                   offset--;
    
                }
    
        
    
    
              }
              $('#dt-able').append('</tr>');
    
            }
          }
    
    
        });
    
        