<!-- Benefits of GRID css over Bootstrap -->

css  Grid markUp is easy to to write than Bootstrap markUp
but Bootstrap markup name suggest whole story of what/which css is used.


Grid Css gives up flexibilty to change style as per out own wish rather following specific bootstrap 

we can use MediaQuery as per our wish inn GRID css not possible in Bootstrap markup

<!-- grid-template-columns -->
    grid-template-columns: 100px auto 100px;
it helps to determine number of column of with size or flexible(auto) we want.

    grid-template-columns: 1fr 2fr 1fr 1fr;
 now intire four columns take splits into 4 column with 1fr (one fraction each)

 OR same we can write as repeat(4 , 1fr);

rid-template-columns : repeat(3, 1fr);
rid-template-rows : repeat(2, 50px);

shortHand => grid-template: repeat(2, 50px) / repeat(3, 1fr);

<!-- HOW to adjust THe Postion and Size of items on Grid -->