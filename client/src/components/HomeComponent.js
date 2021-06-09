import React from 'react';
//import HomePicture from 'assets/images/logo.png';

function Home()
{
  return(
    <div className="container text-white">
      <div className = "row">
        <div className = "col-12 col-sm-4">
          <img src = 'assets/images/record.png' alt = "Recall, Record, Analyse" className = "img-fluid"/>
          &nbsp;
        </div>
        <div className = "col-12 col-sm">
          <h4> Never Before has the process been so easy </h4>
          &nbsp;
          <h5> Step 1: Create an account </h5>
          <h5> Step 2: Record Your Dreams for a minimum of 30 days </h5>
          <h5> Step 3: Click on "Analyse Dream" to generate a comprehensive report of the insights of your dreams </h5>
          <h5> Step 4: Click on "Generate a PDF" </h5>
          <h5> Step 5: Check your email for a comprehensive report of your dreams</h5>
          <h5> Step 6: Repeat th process </h5>
          &nbsp;
        </div>
      </div>
    </div>
      );
}


export default Home;
