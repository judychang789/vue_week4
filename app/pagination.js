

export default{    
    props:["pages" , "getProductsData"],    
    //template:`<div class="">這是一個元件</div>`
    template:`<nav aria-label="Page navigation example">
    <ul class="pagination">
        <li class="page-item" :class="{ disabled: !pages.has_pre }">
          <a class="page-link" href="#"  @click="getProductsData(pages.current_page - 1)">
            Previous
          </a>
        </li>

        <li class="page-item" :class="{ active: page === pages.current_page }"  v-for="page in pages.total_pages" :key="page + 'page'">
          <a class="page-link" href="#" @click.prevent="$emit('change-page' , page)">
            {{ page }}
          </a>
        </li>

        <li class="page-item" :class="{ disabled: !pages.has_next }">
          <a class="page-link" href="#"  @click="getProductsData(pages.current_page + 1)">
            Next
          </a>
        </li>
    </ul>
  </nav>`,
    // mounted() {
    // //    console.log("page",this.page)
    // }
}






// export default{    
//   props:["pages" , "getProductsData"],    
//   //template:`<div class="">這是一個元件</div>`
//   template:`<nav aria-label="Page navigation example">
//   {{ pages }}
//   <ul class="pagination">
//       <li class="page-item" :class="{ disabled: !pages.has_pre }">
//         <a class="page-link" href="#"  @click="getProductsData(pages.current_page - 1)">
//           Previous
//         </a>
//       </li>

//       <li class="page-item" :class="{ active: page === pages.current_page }"  v-for="page in pages.total_pages" :key="page + 'page'">
//         <a class="page-link" href="#" @click.prevent="getProductsData(page)">
//           {{ page }}
//         </a>
//       </li>

//       <li class="page-item" :class="{ disabled: !pages.has_next }">
//         <a class="page-link" href="#"  @click="getProductsData(pages.current_page + 1)">
//           Next
//         </a>
//       </li>
//   </ul>
// </nav>`,
// }



