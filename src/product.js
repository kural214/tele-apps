import './App.css';
import './product.css';
import cycle from './images/cycle.png'

function ProductCard() {
    return (
        <div className="card" style={{ width: 500 }}>
            <div className="container">
                <div tabindex="0" class="e-card" id="vertical_business">
                    <div class="e-card-header">
                        <div class="e-card-header-caption">
                            <div class="e-card-header-title">Product Details</div>
                        </div>
                    </div>
                    <div class="e-card-actions">
                        <div style={{ float: 'left' }}>
                            <img src={cycle} width="100" height="100"></img>
                        </div>
                        <div className='contact-value'>NIKE Active+ <br /> Hybrid E-Bike</div>
                        <div className='contact-value' style={{ color: '#0dcaf0' }}>Full Spec</div>
                        <div>
                        <div className='serial-number'>
                            <div>Serial Number</div>
                            <div style={{ color: '#0dcaf0' }}>NIKCS00909782334H</div>
                        </div>
                        <div className='serial-year'>
                            <div>Year</div>
                            <div style={{ color: '#0dcaf0' }}>2019</div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;