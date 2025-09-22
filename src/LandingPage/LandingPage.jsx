import React from 'react'
import LandingPageNavbar from './LandingPageNavbar'
import LangdingPageHeader from './LangdingPageHeader'
import LandingPagePersonalized from './LandingPagePersonalized'
import LandingPageSubscription from './LandingPageSubscription'
import LandingPageAdds from './LandingPageAdds'
import LandingPageFooter from './LandingPageFooter'

const LandingPage = () => {
    return (
        <div className='p-10'>
            <section className='bg-[radial-gradient(100%_207.36%_at_0%_0%,rgba(255,255,255,0.25)_0%,rgba(247,247,255,0.35)_50%,rgba(231,233,251,0.5)_100%)]'>
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