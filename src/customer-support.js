import './App.css';

function CustomerSupportCard() {
    return (
        <div className="card">
            <div className="container">
                <div tabindex="0" class="e-card" id="vertical_business">
                    <div class="e-card-header">
                        <div class="e-card-header-caption">
                            <div class="e-card-header-title">
                                <span>Jenifer Lopez</span>
                            </div>
                            <br />
                            <span>044 234232423</span>
                        </div>
                    </div>
                    <div class="e-card-actions">
                        <div style={{ color: '#0dcaf0' }}>Customer Support</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomerSupportCard;