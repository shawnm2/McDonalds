/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17000, function(sym, e) {
         // insert code here
         sym.stop();
         sym.$("burger").show();
         sym.$("TextPlay").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // insert code here
         sym.stop();
         sym.$("burger").show();
         sym.$("TextPlay").show();
         

      });
      //Edge binding end

            Symbol.bindElementAction(compId, symbolName, "${_burger}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play();
         // Hide an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("burger").hide();
         sym.$("TextPlayCopy").hide();
         sym.$("TextPlay").hide();
         
         
         
         
         
         

      });
         //Edge binding end



      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         // insert code here
         sym.stop();
         sym.$("burger").show();
         sym.$("TextPlay").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10500, function(sym, e) {
         // insert code here
         sym.stop();
         sym.$("burger").show();
         sym.$("TextPlay").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12250, function(sym, e) {
         // insert code here
         sym.stop();
         sym.$("burger").show();
         sym.$("TextPlay").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15250, function(sym, e) {
         // insert code here
         sym.stop();
         sym.$("burger").show();
         sym.$("TextPlay").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19000, function(sym, e) {
         // insert code here
         sym.stop();
         sym.$("burger").show();
         sym.$("TextPlay").show();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         // insert code here
         sym.stop();
         sym.$("burger").show();
         sym.$("TextPlay").show();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23000, function(sym, e) {
         // insert code here
         sym.stop();
         sym.$("burger").show();
         sym.$("TextPlayStart").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.$("TextPlayStart").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22000, function(sym, e) {
         // insert code here
         sym.stop();
         sym.$("burger").show();
         sym.$("TextPlay").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text8}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("index.php", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text8}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         //sym.$("Text8").html("Return to Main");
         //sym.$("Text8").style.color = "lightblue";
         //sym.$("Text8").innerhtml.style.font = "italic bold 20px arial,serif";
         sym.$("Text8").css("color", "blue");
         sym.$("Text8").css("text-decoration", "none");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text8}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.$("Text8").css("color", "black");
         sym.$("Text8").css("text-decoration", "underline");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text9}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("scenarios.php", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text9}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         //sym.$("Text8").html("Return to Main");
         //sym.$("Text8").style.color = "lightblue";
         //sym.$("Text8").innerhtml.style.font = "italic bold 20px arial,serif";
         sym.$("Text9").css("color", "blue");
         sym.$("Text9").css("text-decoration", "none");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text9}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.$("Text9").css("color", "black");
         sym.$("Text9").css("text-decoration", "underline");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-2199537479");