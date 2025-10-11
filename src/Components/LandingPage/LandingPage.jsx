import React from "react";
import LandingPageNavbar from "./LandingPageNavbar";
import LangdingPageHeader from "./LangdingPageHeader";
import LandingPageFooter from "./LandingPageFooter";
import LandingPageAdds from "./LandingPageAdds";
import LandingPageSubscription from "./LandingPageSubscription";
import LandingPagePersonalized from "./LandingPagePersonalized";



const LandingPage = () => {
    return (
        <div className='p-10 '>
            <section className='bg-[radial-gradient(circle, #ffffff_25%, #f6f7ff_35%, #e7e9fb_50%)]'>
                <div className=' '>
                    <LandingPageNavbar></LandingPageNavbar>
                </div>
                <div>
                    <LangdingPageHeader></LangdingPageHeader>
                </div>
            </section>
            <div>
                <LandingPagePersonalized></LandingPagePersonalized>
            </div>
            <div>
                <LandingPageSubscription></LandingPageSubscription>
            </div>
            <div>
                <LandingPageAdds></LandingPageAdds>
            </div>
            <div>
               <LandingPageFooter></LandingPageFooter>
            </div>
        </div>
    )
}

export default LandingPage