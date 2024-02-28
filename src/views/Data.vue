<script  setup>
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';

DataTable.use(DataTablesCore);
const columns = [
  { data: 'location' },
  { data: 'latitude' },
  { data: 'longitude' },
  { data: 'term' },
  { data: 'radius' },
  { data: 'categories' },
  { data: 'price'},
  { data: 'open_now'},
  { data: 'reservation_date'},
  { data: 'reservation_time'},
];
</script>

<template>
  <div style="position: absolute;
    top: 30%;
    left: 40%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 100px;">
    
    <DataTable style
      :columns="columns"
      ajax="/data.json"
      class="table table-hover table-striped"
      width="100%"
    >
      <thead>
        <tr>
          <th>Location</th>
          <th>Latitude</th>
          <th>Longitude</th>
          <th>Term</th>
          <th>Radius</th>
          <th>Categories</th>
          <th>Price</th>
          <th>Open Now</th>
          <th>Reservation Date</th>
          <th>Reservation Time</th>
        </tr>
      </thead>
    </DataTable>
  </div>
</template>

<style >
@import 'bootstrap';
@import 'datatables.net-bs5';
</style>
