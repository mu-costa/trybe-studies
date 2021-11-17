const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber},
    ${order.address.street}, ${order.address.number}, ${order.address.apartment}`)
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    order['name'] = 'Luiz Silva';
    order.order.pizza.marguerita['name'] = 'Marguerita';
    order.order.pizza.pepperoni['name'] = 'Pepperoni';
    order.order.drinks.coke.price = '50';
    console.log(`"Olá ${order.name}, o total do seu pedido de ${order.order.pizza.marguerita.name}, ${order.order.pizza.pepperoni.name} e ${order.order.drinks.coke.type} é R$ ${order.order.drinks.coke.price}."`)
  }
  
  orderModifier(order);
