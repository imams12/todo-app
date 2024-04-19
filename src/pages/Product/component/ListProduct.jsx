import { Component } from "react";
import ItemProduct from "./ItemProduct";
import { IconBookmark, IconShoppingCart } from "@tabler/icons-react";

export default class ListProduct extends Component {
  state = {
    itemCount: 0,
    saveCount: 0,
  };

  handleChangeSaveCount = (number) => {
    this.setState({
      saveCount: this.state.saveCount + number,
    });
  };

  render() {
    return (
      <section>
        <div className="container shadow-sm p-4 my-4 rounded-2">
          <div className="d-flex justify-content-between">
            <h2 className="my-2">List product Enigmat Shop</h2>
    
          <div className="d-flex justify-content-end column-gap-2">
            <p className="text-end my-2">
              <IconBookmark />
              <span className="badge text-bg-secondary rounded-pill">
                {this.state.saveCount}
              </span>
            </p>

            <p className="text-end my-2">
              <IconShoppingCart />
              <span className="badge text-bg-secondary rounded-pill">
                {this.state.itemCount}
              </span>
            </p>
          </div>
          </div>
          <div className="row row-cols-lg-4 row-cols-1-1 g-4">
            <div className="col">
              <ItemProduct
                image="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/109/MTA-96642649/ale_-_ale_ale-ale_minuman_ale_ale_190ml_cup_aneka_rasa_1_dus_isi_24_pcs_full01_nivq5b3k.jpg"
                title="Ale Ale"
                price={2000}
                changeSaveCount={this.handleChangeSaveCount}
              />
            </div>

            <div className="col">
              <ItemProduct
                image="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-10906782/beng-beng_beng-beng-coklat-wafer-20g_full01.jpg"
                title="Beng Beng"
                price={3000}
                changeSaveCount={this.handleChangeSaveCount}
              />
            </div>

            <div className="col">
              <ItemProduct
                image="https://images.tokopedia.net/img/cache/700/VqbcmM/2022/9/12/f6bc5cc0-947b-495c-9714-618812d04162.jpg"
                title="Oleo"
                price={4000}
                changeSaveCount={this.handleChangeSaveCount}
              />
            </div>

            <div className="col">
              <ItemProduct
                image="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/MTA-13941937/biskuat_biskuat_coklat_134-4_gr_full02_k0w6hxym.jpeg"
                title="Biskuat"
                price={5000}
                changeSaveCount={this.handleChangeSaveCount}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
