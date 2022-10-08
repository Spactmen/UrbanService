import styles from '../styles/footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer_section}>
            <div className={styles.footer_locations}>
                <p className={styles.footer_locations_title}>Top Locations</p>
                <p className={styles.footer_locations_description}>Noida • Delhi • Gurgaon • Ghaziabad • Faridabad • Agra • Ahmedabad • Amritsar • Aurangabad • Bangalore • Bhopal • Bhubaneswar • Chandigarh • Chennai • Coimbatore • Dehradun • Greater Noida • Guwahati • Gwalior • Hyderabad • Indore • Jabalpur • Jaipur • Jamshedpur • Kanpur • Kochi • Kolkata • Kota • Lucknow • Ludhiana • Meerut • Mohali • Mumbai • Navi Mumbai • Mysore • Nagpur • Nashik • Patna • Panipat • Prayagraj • Pune • Raipur • Ranchi • Surat • Thiruvananthapuram • Vadodara • Varanasi • Vijayawada • Visakhapatnam</p>
            </div>
            <div className={styles.footer_contact}>
                <p className={styles.footer_contact_title}>Contact Us</p>
                <div className={styles.footer_contact_description_div}>
                    <p className={styles.footer_contact_description}>Phone : +91 782 762 1417</p>
                    <p className={styles.footer_contact_description}>Email : support@roservicecenter.live</p>
                </div>
            </div>
            <div className={styles.footer_links}>
                <ul>
                    <li>About Us</li>
                    <li>Blog</li>
                    <li>Near me</li>
                    <li>Terms and Conditions</li>
                    <li>Privacy policy</li>
                    <li>About Us</li>
                </ul>
            </div>

        </div>
    )
}

export default Footer