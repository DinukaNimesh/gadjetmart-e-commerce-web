// ** core
import React from 'react';
// ** css
import '../../css/components/Home/CompanyPanel.css';
import '../../css/components/Home/filter.css';
// ** external components
import { Button, Badge } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import Select from 'react-select';
// ** import components
import { showFailedToast, showSuccessToast } from '../../config/showToast';
import CardItem from './CardItem';

function AbansPanel() {

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]


  return (
    <>

      <section id='filter-container'>
        <div id='filter-item'>
          <label>Brand</label>
          <Select options={options} defaultValue={options[1]} onChange={(val) => console.log(val)} />
        </div>

        <div id='filter-item'>
          <label>Category</label>
          <Select options={options} defaultValue={options[1]} onChange={(val) => console.log(val)} />
        </div>

        <div id='filter-item'>
          <label>Product name: </label>
          <input id='search-input' />
        </div>
      </section>

      <div id='button-container'>
      <Button
        color='info'
        onClick={() => console.log("working...")}
        id='filter-button'
      >
        filter
      </Button>
      
      <Button
        color='secondary'
        onClick={() => console.log("working...")}
        id='filter-button'
        disabled
      >
        reset
      </Button>
      </div>

      <hr />

      <main id='home-tab-panel-container'>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </main>
    </>
  )
}

export default AbansPanel;