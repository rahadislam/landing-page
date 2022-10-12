import React from 'react';

const About = () => {
    return (
        <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row-reverse">
         
          <div>
            <h1 class="text-5xl font-bold">Success Stories</h1>
            <p class="py-6">Your happy customers/collaborators are your best marketing agents. Give them the spotlight so they can sing your praises and tell everyone just how wonderful your product is, or just how helpful you’ve been for them on their path to success.</p>
            <button class="btn btn-primary">More About</button>
          </div>
          <img src="https://t3.ftcdn.net/jpg/05/06/32/62/360_F_506326245_2GtSGEjKLDtpHS0FSkEBs4gV34DmTtS5.jpg" className="w-1/2" />
        </div>
      </div>
    );
};

export default About;