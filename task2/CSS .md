<!-- What is HTML? -->
What is HTML and explain?
HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page. HTML consists of a series of elements. HTML elements tell the browser how to display the content.

<!-- Give basic structure of the HTML page ? -->
Every web document must include one and only one instance of DOCTYPE, <html>, <head>, <body>, and <title>.

<!-- Difference between inline and block level element ? -->
By default, inline elements do not force a new line to begin in the document flow. Block elements, on the other hand, typically cause a line break to occur (although, as usual, this can be changed using CSS). 


<!-- Explain the different ways in which CSS can be applied to HTML, -->
3 ways
1] inLine - by using the style attribute inside HTML elements.
2] Internal -  by using  <style> tag inside <head> tag.
3] External -  by using a <link> element to external css file.

 <!-- what is the preferred way and why. -->
 We should use External css more offten so code is clean and short

 <!-- What are different CSS selectors -->
 There are many basic different types of selectors.
    1] Element Selector.
    e.g : p{...} OR h3{...} OR h1{...}

    2] Id Selector.
    e.g #idname { background-clor : "red"}

    3] Class Selector.
    e.g .class-name { background-clor : "red"}

    4] Universal Selector.
    e.g * { background-clor : "red"}

    5] Group Selector.
    e.g. h1, h4, p {...}

    6] Attribute Selector.
    https://www.w3schools.com/css/css_attribute_selectors.asp

    e.g : 
        i)  a[target] {background-color: yellow} => if there is true/present target then apply css
        ii) a[target="_blank"] {...} => if target value is _blank then apply css
        ii) [title~="flower"] {...}  => used to select elements with an attribute value containing a specified word.
        iv) [class|="top"] {...} => used to select elements with the specified attribute, whose value can be exactly the specified value
        v) [class^="top"] => is used to select elements with the specified attribute, whose value starts with the specified value.
        vi) [class$="test"] =>  is used to select elements whose attribute value ends with a specified value.
    Pseudo-Class Selector.
       vii) [attribute*="value"] => selector is used to select elements whose attribute value contains a specified value.
    
    7] Pseudo-Element Selector. =>  is used to style specified parts of an element.
       i)  p::first-line {color:#ff0000;font-size: 200%} => is used to add a special style to the first line of a text.
       ii) p::first-letter {...} => is used to add a special style to the first letter of a text.
                OR
      iii) p.intro::first-letter {...} 
      iV) h1::before { content: url(smiley.gif)} => used to insert some content before the content of an element.
      v)h1::after {content: url(smiley.gif)} => insert some content after the content of an element.
      vi) ::marker {color: red;font-size: 23px} => used to selects the markers of list items.
      vii) ::selection {...} => matches the portion of an element that is selected by a user.
      viii)h1::selection {color: red;background: yellow} => matches the portion of an element that is selected by a user.
      ...AND LOT MORE VISIT ::: https://www.w3schools.com/css/css_pseudo_elements.asp


      <!-- With the help of a diagram explain CSS Box Model. -->
      1st / outer layer -> Margin -> Clears an area outside the border. The margin is transparent
      2nd layer -> Border     ->     A border that goes around the padding and content
      3rd layer -> Padding    ->     Clears an area around the content. The padding is transparent
      4th/ inside layer ->Content -> The content of the box, where text and images appear


<!-- List down ways in which JavaScript command can be added to a webpage -->
three ways to add JavaScript to a web page:
*  Embedding the JavaScript code between a pair of <script> and </script> tag.
*  Creating an external JavaScript file with the .js extension and then load it within the page through the src attribute of the <script> tag.
*  Placing the JavaScript code directly inside an HTML tag using the special tag attributes such as onclick, onmouseover, onkeypress, onload, etc.

Calling an External JavaScript File => Is the best prefered way of using JAVASCRIPT


