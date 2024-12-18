function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active');
}


const productData = {
  
    "shoes": [
      {
        "name": "Nike Air Max Infinity",
        "model": "AM-INF24",
        "price": 180,
        "colorways": [
          {
            "name": "white",
            "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e01eb9e0-ddc1-48bf-a516-bcbd40c78e39/NIKE+REACTX+INFINITY+RUN+4.png"
          },
          {
            "name": "black",
            "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/91000969-a728-4e67-8145-1803b2141a32/NIKE+REACTX+INFINITY+RUN+4.png"
          },
          {
            "name": "White",
            "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0d21a1a9-5c07-454a-8853-2bf1fa9a6d52/ZOOM+FLY+6.png"
          },
          {
            "name": "blue",
            "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b49fa6f3-a1ee-4abc-9b27-05d801b18b73/AIR+ZOOM+PEGASUS+41.png"
          },

           
        ],
        "description": "The Nike Air Max Infinity redefines comfort and performance with its innovative design. Featuring a full-length Air Max unit for ultimate cushioning, targeted support for a secure fit, and a breathable mesh upper for optimal airflow, this shoe is perfect for runners and athletes seeking the perfect balance of comfort and performance.",
        "features": [
          {
            "name": "Responsive Cushioning",
            "description": "The Air Max unit provides exceptional shock absorption and responsiveness for a smooth and comfortable ride."
          },
          {
            "name": "Targeted Support",
            "description": "Strategic reinforcements in the upper offer a secure and supportive fit for confident strides."
          },
          {
            "name": "Breathable Upper",
            "description": "Lightweight and breathable materials help keep your feet cool and dry during your runs."
          }
        ],
        "technology": [
          {
            "name": "Air Max Unit",
            "description": "Full-length Air Max unit for maximum cushioning and impact protection."
          },
          {
            "name": "Flyknit Upper",
            "description": "Engineered knit upper provides lightweight support and breathability."
          }
        ]
      },
      {
        "name": "Nike Air Max Infinity",
        "model": "AM-INF24",
        "price": 180,
        "colorways": [
          {
            "name": "white",
            "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e01eb9e0-ddc1-48bf-a516-bcbd40c78e39/NIKE+REACTX+INFINITY+RUN+4.png"
          },
          {
            "name": "black",
            "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/91000969-a728-4e67-8145-1803b2141a32/NIKE+REACTX+INFINITY+RUN+4.png"
          },
          {
            "name": "White",
            "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0d21a1a9-5c07-454a-8853-2bf1fa9a6d52/ZOOM+FLY+6.png"
          },
          {
            "name": "volt",
            "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b49fa6f3-a1ee-4abc-9b27-05d801b18b73/AIR+ZOOM+PEGASUS+41.png"
          },

           
        ],
        "description": "The Nike Air Max Infinity redefines comfort and performance with its innovative design. Featuring a full-length Air Max unit for ultimate cushioning, targeted support for a secure fit, and a breathable mesh upper for optimal airflow, this shoe is perfect for runners and athletes seeking the perfect balance of comfort and performance.",
        "features": [
          {
            "name": "Responsive Cushioning",
            "description": "The Air Max unit provides exceptional shock absorption and responsiveness for a smooth and comfortable ride."
          },
          {
            "name": "Targeted Support",
            "description": "Strategic reinforcements in the upper offer a secure and supportive fit for confident strides."
          },
          {
            "name": "Breathable Upper",
            "description": "Lightweight and breathable materials help keep your feet cool and dry during your runs."
          }
        ],
        "technology": [
          {
            "name": "Air Max Unit",
            "description": "Full-length Air Max unit for maximum cushioning and impact protection."
          },
          {
            "name": "Flyknit Upper",
            "description": "Engineered knit upper provides lightweight support and breathability."
          }
        ]
      },
      {
        "name": "Nike Zoom Pegasus 39",
        "model": "ZP39-2024",
        "price": 120,
        "colorways": [
          {
            "name": "white",
            "image": " https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5cb2ff9f-b2cd-4d38-beb0-d12fe0e37598/NIKE+AIR+ZOOM+RIVAL+FLY+4.png"
          },
          {
            "name": "Pink",
            "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5fd41028-9c10-4ec3-a0c7-dc735d5a111b/GIANNIS+FREAK+6+EP.png"
          }
        ],
        "description": "The Nike Zoom Pegasus 39 is a versatile running shoe that delivers a smooth and responsive ride. Its React foam midsole and Zoom Air unit provide cushioned comfort, while the breathable upper keeps your feet cool and comfortable. Whether you're training for a marathon or just going for a casual jog, the Pegasus 39 is a reliable choice.",
        "features": [
          {
            "name": "React Foam Midsole",
            "description": "Offers a soft and springy feel for comfortable and responsive cushioning."
          },
          {
            "name": "Zoom Air Unit",
            "description": "Provides additional responsiveness and energy return in the forefoot."
          },
          {
            "name": "Breathable Mesh Upper",
            "description": "Lightweight and breathable for all-day comfort."
          }
        ],
        "technology": [
          {
            "name": "React Foam",
            "description": "A lightweight and durable foam that delivers a smooth and responsive ride."
          },
          {
            "name": "Zoom Air",
            "description": "A responsive cushioning technology that provides a snappy and energetic feel."
          }
        ]
      },
      {
        "name": "Nike React Infinity Run Flyknit 3",
        "model": "RIRFK3-2024",
        "price": 160,
        "colorways": [
          {
            "name": "Black/White",
            "image": " https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/efb71afa-bff2-4360-bce8-fe95cfb89e40/JORDAN+ZION+3+NRG+PF.png"
          },
          {
            "name": "Platinum/Pink",
            "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7be1364c-45cb-402c-b9ef-d698a0b71074/G.T.+HUSTLE+3++PB+EP.png"
          }
        ],
        "description": "The Nike React Infinity Run Flyknit 3 is designed to help reduce injury and keep you running. Its high foam stack and rocker geometry provide a smooth and stable ride, while the Flyknit upper offers a comfortable and supportive fit. If you're looking for a shoe that can help you run longer and stronger, the React Infinity Run Flyknit 3 is a great option.",
        "features": [
          {
            "name": "High Foam Stack",
            "description": "Offers plush cushioning and a soft feel underfoot."
          },
          {
            "name": "Rocker Geometry",
            "description": "Promotes a smooth transition from heel to toe."
          },
          {
            "name": "Flyknit Upper",
            "description": "Lightweight and breathable for a comfortable fit."
          }
        ],
        "technology": [
          {
            "name": "React Foam",
            "description": "A lightweight and durable foam that delivers a smooth and responsive ride."
          },
          {
            "name": "Flyknit",
            "description": "An engineered knit upper that provides a comfortable and supportive fit."
          }
        ]
      },
      {
        "name": "Nike Air Zoom Alphafly NEXT% 2",
        "model": "AZAN2-2024",
        "price": 275,
        "colorways": [
          {
            "name": "Limelight/Volt",
            "image": " https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fc9dd308-177d-4cb2-aae0-4d19674885e1/SABRINA+2+EP.png"
          }
        ],
        "description": "The Nike Air Zoom Alphafly NEXT% 2 is a high-performance racing shoe designed for speed and efficiency. It features a ZoomX foam midsole with two Zoom Air pods in the forefoot for maximum responsiveness and energy return. The lightweight and breathable Atomknit upper provides a secure and comfortable fit, while the carbon fiber plate in the midsole helps to propel you forward with every stride.",
        "features": [
          {
            "name": "ZoomX Foam Midsole",
            "description": "Nike's lightest and most responsive foam for exceptional cushioning and energy return."
          },
          {
            "name": "Zoom Air Pods",
            "description": "Two Zoom Air pods in the forefoot provide additional responsiveness and cushioning."
          },
          {
            "name": "Atomknit Upper",
            "description": "A lightweight and breathable knit upper that conforms to your foot for a secure and comfortable fit."
          },
          {
            "name": "Carbon Fiber Plate",
            "description": "A stiff plate in the midsole that helps to propel you forward with every stride."
          }
        ],
        "technology": [
          {
            "name": "ZoomX Foam",
            "description": "Nike's lightest and most responsive foam for exceptional cushioning and energy return."
          },
          {
            "name": "Zoom Air",
            "description": "A responsive cushioning technology that provides a snappy and energetic feel."
          },
          {
            "name": "Atomknit",
            "description": "A lightweight and breathable knit upper that conforms to your foot for a secure and comfortable fit."
          }
        ]
      },
      {
        "name": "Nike Air Vapormax 2023 Flyknit",
        "model": "AV23FK-2024",
        "price": 210,
        "colorways": [
          {
            "name": "Triple Black",
            "image": " https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_464,c_limit/91a51763-80fe-488e-a5b2-8f9aff4c9794/lebron-xxii-crown-jewel-ep-basketball-shoes-D4T6mD.png"
          }
        ],
        "description": "The Nike Air Vapormax 2023 Flyknit combines innovative Air cushioning with a lightweight and breathable Flyknit upper. The full-length Vapormax Air unit provides a plush and responsive feel, while the Flyknit upper hugs your foot for a comfortable and secure fit. With its futuristic design and cutting-edge technology, the Vapormax 2023 Flyknit is the perfect shoe for those who want to make a statement and experience the future of footwear.",
        "features": [
          {
            "name": "Vapormax Air Unit",
            "description": "Full-length Vapormax Air unit for lightweight cushioning and a bouncy feel."
          },
          {
            "name": "Flyknit Upper",
            "description": "Engineered knit upper provides lightweight support, breathability, and a sock-like fit."
          },
          {
            "name": "Sustainable Materials",
            "description": "Made with at least 20% recycled content by weight."
          }
        ],
        "technology": [
          {
            "name": "Vapormax Air",
            "description": "Nike's most innovative cushioning technology, providing a lightweight and responsive feel."
          },
          {
            "name": "Flyknit",
            "description": "An engineered knit upper that provides a comfortable and supportive fit."
          }
          ,
          {
            "name": "Nike Zoom Pegasus 39",
            "model": "ZP39-2024",
            "price": 120,
            "colorways": [
              {
                "name": "Blue",
                "image": " https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5cb2ff9f-b2cd-4d38-beb0-d12fe0e37598/NIKE+AIR+ZOOM+RIVAL+FLY+4.png"
              },
              {
                "name": "Pink",
                "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5fd41028-9c10-4ec3-a0c7-dc735d5a111b/GIANNIS+FREAK+6+EP.png"
              }
            ],
            "description": "The Nike Zoom Pegasus 39 is a versatile running shoe that delivers a smooth and responsive ride. Its React foam midsole and Zoom Air unit provide cushioned comfort, while the breathable upper keeps your feet cool and comfortable. Whether you're training for a marathon or just going for a casual jog, the Pegasus 39 is a reliable choice.",
            "features": [
              {
                "name": "React Foam Midsole",
                "description": "Offers a soft and springy feel for comfortable and responsive cushioning."
              },
              {
                "name": "Zoom Air Unit",
                "description": "Provides additional responsiveness and energy return in the forefoot."
              },
              {
                "name": "Breathable Mesh Upper",
                "description": "Lightweight and breathable for all-day comfort."
              }
            ],
            "technology": [
              {
                "name": "React Foam",
                "description": "A lightweight and durable foam that delivers a smooth and responsive ride."
              },
              {
                "name": "Zoom Air",
                "description": "A responsive cushioning technology that provides a snappy and energetic feel."
              }
            ]
          },
           {
        "name": "Nike Zoom Pegasus 39",
        "model": "ZP39-2024",
        "price": 120,
        "colorways": [
          {
            "name": "Blue",
            "image": " https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5cb2ff9f-b2cd-4d38-beb0-d12fe0e37598/NIKE+AIR+ZOOM+RIVAL+FLY+4.png"
          },
          {
            "name": "Pink",
            "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5fd41028-9c10-4ec3-a0c7-dc735d5a111b/GIANNIS+FREAK+6+EP.png"
          }
        ],
        "description": "The Nike Zoom Pegasus 39 is a versatile running shoe that delivers a smooth and responsive ride. Its React foam midsole and Zoom Air unit provide cushioned comfort, while the breathable upper keeps your feet cool and comfortable. Whether you're training for a marathon or just going for a casual jog, the Pegasus 39 is a reliable choice.",
        "features": [
          {
            "name": "React Foam Midsole",
            "description": "Offers a soft and springy feel for comfortable and responsive cushioning."
          },
          {
            "name": "Zoom Air Unit",
            "description": "Provides additional responsiveness and energy return in the forefoot."
          },
          {
            "name": "Breathable Mesh Upper",
            "description": "Lightweight and breathable for all-day comfort."
          }
        ],
        "technology": [
          {
            "name": "React Foam",
            "description": "A lightweight and durable foam that delivers a smooth and responsive ride."
          },
          {
            "name": "Zoom Air",
            "description": "A responsive cushioning technology that provides a snappy and energetic feel."
          }
        ]
      }
        ]
      }
      ,  {
        "name": "Nike Air Max Infinity",
        "model": "AM-INF24",
        "price": 180,
        "colorways": [
          {
            "name": "white",
            "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e01eb9e0-ddc1-48bf-a516-bcbd40c78e39/NIKE+REACTX+INFINITY+RUN+4.png"
          },
          {
            "name": "black",
            "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/91000969-a728-4e67-8145-1803b2141a32/NIKE+REACTX+INFINITY+RUN+4.png"
          },
          {
            "name": "white",
            "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0d21a1a9-5c07-454a-8853-2bf1fa9a6d52/ZOOM+FLY+6.png"
          },
          {
            "name": "blue",
            "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b49fa6f3-a1ee-4abc-9b27-05d801b18b73/AIR+ZOOM+PEGASUS+41.png"
          },

           
        ],
        "description": "The Nike Air Max Infinity redefines comfort and performance with its innovative design. Featuring a full-length Air Max unit for ultimate cushioning, targeted support for a secure fit, and a breathable mesh upper for optimal airflow, this shoe is perfect for runners and athletes seeking the perfect balance of comfort and performance.",
        "features": [
          {
            "name": "Responsive Cushioning",
            "description": "The Air Max unit provides exceptional shock absorption and responsiveness for a smooth and comfortable ride."
          },
          {
            "name": "Targeted Support",
            "description": "Strategic reinforcements in the upper offer a secure and supportive fit for confident strides."
          },
          {
            "name": "Breathable Upper",
            "description": "Lightweight and breathable materials help keep your feet cool and dry during your runs."
          }
        ],
        "technology": [
          {
            "name": "Air Max Unit",
            "description": "Full-length Air Max unit for maximum cushioning and impact protection."
          },
          {
            "name": "Flyknit Upper",
            "description": "Engineered knit upper provides lightweight support and breathability."
          }
        ]
      },
      {
        "name": "Nike Air Max Infinity",
        "model": "AM-INF24",
        "price": 180,
        "colorways": [
          {
            "name": "Black",
            "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e01eb9e0-ddc1-48bf-a516-bcbd40c78e39/NIKE+REACTX+INFINITY+RUN+4.png"
          },
          {
            "name": "White",
            "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/91000969-a728-4e67-8145-1803b2141a32/NIKE+REACTX+INFINITY+RUN+4.png"
          },
          {
            "name": "Volt",
            "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0d21a1a9-5c07-454a-8853-2bf1fa9a6d52/ZOOM+FLY+6.png"
          },
          {
            "name": "White",
            "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b49fa6f3-a1ee-4abc-9b27-05d801b18b73/AIR+ZOOM+PEGASUS+41.png"
          },

           
        ],
        "description": "The Nike Air Max Infinity redefines comfort and performance with its innovative design. Featuring a full-length Air Max unit for ultimate cushioning, targeted support for a secure fit, and a breathable mesh upper for optimal airflow, this shoe is perfect for runners and athletes seeking the perfect balance of comfort and performance.",
        "features": [
          {
            "name": "Responsive Cushioning",
            "description": "The Air Max unit provides exceptional shock absorption and responsiveness for a smooth and comfortable ride."
          },
          {
            "name": "Targeted Support",
            "description": "Strategic reinforcements in the upper offer a secure and supportive fit for confident strides."
          },
          {
            "name": "Breathable Upper",
            "description": "Lightweight and breathable materials help keep your feet cool and dry during your runs."
          }
        ],
        "technology": [
          {
            "name": "Air Max Unit",
            "description": "Full-length Air Max unit for maximum cushioning and impact protection."
          },
          {
            "name": "Flyknit Upper",
            "description": "Engineered knit upper provides lightweight support and breathability."
          }
        ]
      },
      
      {
        "name": "Nike Air Vapormax 2023 Flyknit",
        "model": "AV23FK-2024",
        "price": 210,
        "colorways": [
          {
            "name": "Triple Black",
            "image": " https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_464,c_limit/91a51763-80fe-488e-a5b2-8f9aff4c9794/lebron-xxii-crown-jewel-ep-basketball-shoes-D4T6mD.png"
          }
        ],
        "description": "The Nike Air Vapormax 2023 Flyknit combines innovative Air cushioning with a lightweight and breathable Flyknit upper. The full-length Vapormax Air unit provides a plush and responsive feel, while the Flyknit upper hugs your foot for a comfortable and secure fit. With its futuristic design and cutting-edge technology, the Vapormax 2023 Flyknit is the perfect shoe for those who want to make a statement and experience the future of footwear.",
        "features": [
          {
            "name": "Vapormax Air Unit",
            "description": "Full-length Vapormax Air unit for lightweight cushioning and a bouncy feel."
          },
          {
            "name": "Flyknit Upper",
            "description": "Engineered knit upper provides lightweight support, breathability, and a sock-like fit."
          },
          {
            "name": "Sustainable Materials",
            "description": "Made with at least 20% recycled content by weight."
          }
        ],
        "technology": [
          {
            "name": "Vapormax Air",
            "description": "Nike's most innovative cushioning technology, providing a lightweight and responsive feel."
          },
          {
            "name": "Flyknit",
            "description": "An engineered knit upper that provides a comfortable and supportive fit."
          }
          ,
          {
            "name": "Nike Zoom Pegasus 39",
            "model": "ZP39-2024",
            "price": 120,
           
            "description": "The Nike Zoom Pegasus 39 is a versatile running shoe that delivers a smooth and responsive ride. Its React foam midsole and Zoom Air unit provide cushioned comfort, while the breathable upper keeps your feet cool and comfortable. Whether you're training for a marathon or just going for a casual jog, the Pegasus 39 is a reliable choice.",
            "features": [
              {
                "name": "React Foam Midsole",
                "description": "Offers a soft and springy feel for comfortable and responsive cushioning."
              },
              {
                "name": "Zoom Air Unit",
                "description": "Provides additional responsiveness and energy return in the forefoot."
              },
              {
                "name": "Breathable Mesh Upper",
                "description": "Lightweight and breathable for all-day comfort."
              }
            ],
            "technology": [
              {
                "name": "React Foam",
                "description": "A lightweight and durable foam that delivers a smooth and responsive ride."
              },
              {
                "name": "Zoom Air",
                "description": "A responsive cushioning technology that provides a snappy and energetic feel."
              }
            ]
          },
           {
        "name": "Nike Zoom Pegasus 39",
        "model": "ZP39-2024",
        "price": 120,
        "colorways": [
          {
            "name": "Blue",
            "image": " https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5cb2ff9f-b2cd-4d38-beb0-d12fe0e37598/NIKE+AIR+ZOOM+RIVAL+FLY+4.png"
          },
          {
            "name": "Pink",
            "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5fd41028-9c10-4ec3-a0c7-dc735d5a111b/GIANNIS+FREAK+6+EP.png"
          }
        ],
        "description": "The Nike Zoom Pegasus 39 is a versatile running shoe that delivers a smooth and responsive ride. Its React foam midsole and Zoom Air unit provide cushioned comfort, while the breathable upper keeps your feet cool and comfortable. Whether you're training for a marathon or just going for a casual jog, the Pegasus 39 is a reliable choice.",
        "features": [
          {
            "name": "React Foam Midsole",
            "description": "Offers a soft and springy feel for comfortable and responsive cushioning."
          },
          {
            "name": "Zoom Air Unit",
            "description": "Provides additional responsiveness and energy return in the forefoot."
          },
          {
            "name": "Breathable Mesh Upper",
            "description": "Lightweight and breathable for all-day comfort."
          }
        ],
        "technology": [
          {
            "name": "React Foam",
            "description": "A lightweight and durable foam that delivers a smooth and responsive ride."
          },
          {
            "name": "Zoom Air",
            "description": "A responsive cushioning technology that provides a snappy and energetic feel."
          }
        ]
      }
        ]
      }
    ]
  }
  

const shopGrid = document.getElementById('shopGrid');

productData.shoes.forEach(shoe => {
  shoe.colorways.forEach(colorway => {
      const shoeCard = document.createElement('div');
      shoeCard.classList.add('shoe-card');
      shoeCard.innerHTML = `
          <img src="${colorway.image}" alt="${shoe.name} - ${colorway.name}">
          <h3>${shoe.name}</h3>
          <p>Color: ${colorway.name}</p>
          <p>Price: $${shoe.price}</p>
           
          <p><a href="https://www.nike.com/" target="_blank">Buy Now</a></p>
      `;
      shopGrid.appendChild(shoeCard);
  });
});