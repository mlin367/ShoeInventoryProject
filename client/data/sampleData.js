const shoeSlots = [];

const ultraBoostSample = {
  image_url: 'https://stockx-360.imgix.net/Adidas-Ultra-Boost-4-0-Running-White/Images/Adidas-Ultra-Boost-4-0-Running-White/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1538080256&w=1300',
  name: 'adidas Ultra Boost 4.0 Running White',
  brand: 'adidas',
  style: 'BB6168',
  size: '9',
  upc_id: '888164904934'
}

const sbDunkSample = {
  image_url: 'https://stockx.imgix.net/Nike-SB-Dunk-High-Dog-Walker-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1555969001&w=1300',
  name: 'Nike SB Dunk High Dog Walker',
  brand: 'Nike',
  style: 'BQ6827-300',
  size: '9',
  upc_id: '886066290070'
}

shoeSlots.push(ultraBoostSample);
shoeSlots.push(sbDunkSample);

for (let i = 2; i < 25; i++) {
  shoeSlots.push({
    image_url: '',
    name: '',
    brand: '',
    style: '',
    size: '',
    upc_id: ''
  });
}

export default shoeSlots;
