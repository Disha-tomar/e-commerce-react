import classes from "./Layout.module.scss";
import { useState, useEffect } from "react";
import {
  faRotateRight,
  faFilter,
  faDownload,
  faBars,
  faSearch,
  faUser,
  faCartShopping,
  faChevronLeft,
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Product from "./Product";

function Layout() {
  const [allProductsList, setAllProductsList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [q, setQ] = useState("");
  const [searchParam, setSearchParam] = useState(["capital", "name"]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const getAllProducts = async () => {
    let response = await fetch("https://fakestoreapi.com/products");
    response = await response.json();

    setAllProductsList(response);
  };

  const getCategories = async () => {
    let response = await fetch("https://fakestoreapi.com/products/categories");
    response = await response.json();
    console.log(response);
    setCategories(response);
  };

  useEffect(() => {
    getAllProducts();
    getCategories();
  }, []);

  function search(items) {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  }

  const byCategory = (product, category) => {
    if (category) {
      return product.category === category;
    } else return product;
  };
  const bySearch = (product, search) => {
    if (search) {
      return product.title.toLowerCase().includes(search.toLowerCase());
    } else return product;
  };

  const filteredList = (products, category, search) => {
    return products
      .filter((product) => byCategory(product, category))
      .filter((product) => bySearch(product, search));
  };

  function updateProductsList(e) {
    // let queryString = e.target.value;
    // setQ(queryString);
    // console.log(queryString);
    // let filteredList = allProductsList.filter((product) => {
    //   if (queryString === "") {
    //     return product;
    //   } else if (
    //     product.title.toLowerCase().includes(queryString.toLowerCase()) ||
    //     product.description.toLowerCase().includes(queryString.toLowerCase()) ||
    //     product.category.toLowerCase().includes(queryString.toLowerCase())
    //   ) {
    //     return product;
    //   }
    // });
    // console.log(filteredList);
    // setAllProductsList(filteredList);
  }

  return (
    <>
      <div className={classes["layout"]}>
        <div className={classes["header_container"]}>
          <div className={classes["header_container_top"]}>
            <ul>
              <li>Best Sellers</li>
              <li>Gift Ideas</li>
              <li>New Releases</li>
              <li>Today's Deals</li>
              <li>Customer Service</li>
            </ul>
          </div>
          <div className={classes["header_site_title"]}>Eflyer</div>
          <div className={classes["header_utility"]}>
            <div className={classes["header_utility_menutoggle"]}>
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div className={classes["header_utility_category"]}>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {<option value="">All Categories</option>}
                {categories.map((item, i) => {
                  return (
                    <option key={i} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className={classes["header_utility_search_group"]}>
              <input
                type="text"
                placeholder="Search"
                value={q}
                onChange={(e) => {
                  setQ(e.target.value);
                }}
              />
              <div>
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </div>
            <div className={classes["header_utility_language"]}>
              <span>English</span>
              <span>
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </div>
            <div className={classes["header_utility_cart_actions"]}>
              <div>
                {" "}
                <span className={classes["header_utility_cart_actions_icon"]}>
                  <FontAwesomeIcon icon={faCartShopping} />
                </span>
                <span className={classes["header_utility_cart_actions_title"]}>
                  CART
                </span>
              </div>
              <div>
                {" "}
                <span className={classes["header_utility_cart_actions_icon"]}>
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <span className={classes["header_utility_cart_actions_title"]}>
                  LOGIN
                </span>
              </div>
            </div>
          </div>
          <div className={classes["header_banner_container"]}>
            <div className={classes["header_banner_container_carousel"]}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className={classes["header_banner_container_banner"]}>
              <h1>
                GET STARTED <br></br>YOUR FAVOURITE SHOPPING
              </h1>
              <button>BUY NOW</button>
            </div>
            <div className={classes["header_banner_container_carousel"]}>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
        </div>
        <div className={classes["products_container"]}>
          <div>
            <h1>Men & Women Fashion</h1>
          </div>
          <div className={classes["products_container_list"]}>
            {filteredList(allProductsList, selectedCategory, q).map(
              (product) => (
                <Product
                  key={product["title"]}
                  title={product["title"]}
                  price={product["price"]}
                  image={product["image"]}
                />
              )
            )}
          </div>
          {/* <Product></Product> */}
        </div>
      </div>
    </>
  );
}

export default Layout;
