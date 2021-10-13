import './App.css';
import './email.css';

function EmailCard() {
    return (
        <div className="card">
            <div className="container">
                <div class="e-card" id="vertical_business">
                    <div class="e-card-header">
                        <div class="e-card-header-caption">
                            <div class="e-card-header-title">Email</div>
                        </div>
                    </div>
                    <div class="e-card-actions card-content">
                        <div class="e-input-group">
                            <input class="e-input" type="text" placeholder="Write an email" />
                        </div>
                        <button className='e-control e-btn e-lib e-info'>Compose</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmailCard;