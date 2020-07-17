import { useBusiness } from "./BusinessDataProvider.js";
import { Business } from "./Business.js";

export const businessList = () => {

  let htmlStuff = ""
  const target = document.querySelector(".content")
  const allBusinesses = useBusiness()


  for (const biz of allBusinesses) {
    htmlStuff += Business(biz)
  }

  target.innerHTML +=  `
    <div>
      ${htmlStuff}
    </div>
  `


const companySearchResultArticle = document.querySelector(".foundCompanies")
document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
          let keyWord = keyPressEvent.target.value
          if (keyWord !== "") {
            console.log("keyword", keyWord)
            const foundBusiness = allBusinesses.find(biz => biz.companyName.toUpperCase().includes(keyWord.toUpperCase()))
            if (foundBusiness === undefined) {
              companySearchResultArticle.innerHTML = `
                <h2>No Company found</h2>
              `
            } else {
              companySearchResultArticle.innerHTML = `
              <h2>
              ${foundBusiness.companyName}
              </h2>
              <section>
              ${foundBusiness.addressFullStreet}
              </section>
              `;
            }
            } else {
              companySearchResultArticle.innerHTML = ` `
            }
          }
    });
}