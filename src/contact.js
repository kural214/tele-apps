import './App.css';
import './contact.css';

function ContactCard(props) {
    return (
        <div className="card">
            <div className="container">
                <div class="e-card" id="vertical_business">
                    <div class="e-card-header">
                        <div class="e-card-header-caption">
                            <div class="e-card-header-title">Contact</div>
                        </div>
                    </div>
                    <div class="e-card-actions">
                        <div>
                            <div className='contact-name'>Email</div>
                            <div className='contact-value'>{ props.dataSource.contact.email }</div>
                        </div>
                        <div>
                            <div className='contact-name'>Address</div>
                            <div className='contact-value'>{ props.dataSource.contact.address }</div>
                        </div>
                        <div>
                            <div className='contact-name'>City</div>
                            <div className='contact-value'>{ props.dataSource.contact.city }</div>
                        </div>
                        <div >
                            <div className='contact-name'>State</div>
                            <div className='contact-value'>{ props.dataSource.contact.state }</div>
                        </div>
                        <div >
                            <div className='contact-name'>Zipcode</div>
                            <div className='contact-value'>{ props.dataSource.contact.zipCode }</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactCard;