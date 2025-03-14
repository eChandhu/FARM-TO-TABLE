// seed.js
const mongoose = require('mongoose');
const { Farm } = require('./index'); // This should now correctly import Farm

mongoose.connect('mongodb://localhost:27017/farmDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

    const farmsData = [
        {
            "farm_id": "F001",
            "farm_name": "Green Valley Farms",
            "location": "California, USA",
            "farmer_contact": "123-456-7890",
            "crops": [{
                "crop_id": "C001",
                "crop_type": "Wheat",
                "harvest_date": "2023-10-01",
                "processing": {
                    "batch_id": "B001",
                    "process_date": "2023-10-02",
                    "processing_details": "Cleaned and packed",
                    "distribution": {
                        "route_id": "R001",
                        "distribution_date": "2023-10-03",
                        "distributor_name": "AgriTransport",
                        "route": "Farm A to City B",
                        "consumer": {
                            "consumer_id": "CO001",
                            "order_id": "O001",
                            "delivery_date": "2023-10-05",
                            "feedback": "Great quality"
                        }
                    }
                }
            }]
        },
        {
            "farm_id": "F002",
            "farm_name": "Sunny Acres",
            "location": "Texas, USA",
            "farmer_contact": "234-567-8901",
            "crops": [{
                "crop_id": "C002",
                "crop_type": "Corn",
                "harvest_date": "2023-09-15",
                "processing": {
                    "batch_id": "B002",
                    "process_date": "2023-09-17",
                    "processing_details": "Dried and packed",
                    "distribution": {
                        "route_id": "R002",
                        "distribution_date": "2023-09-20",
                        "distributor_name": "Corn Logistics",
                        "route": "Farm B to City C",
                        "consumer": {
                            "consumer_id": "CO002",
                            "order_id": "O002",
                            "delivery_date": "2023-09-23",
                            "feedback": "Good quality"
                        }
                    }
                }
            }]
        },
        {
            "farm_id": "F003",
            "farm_name": "Hillside Farms",
            "location": "Iowa, USA",
            "farmer_contact": "345-678-9012",
            "crops": [{
                "crop_id": "C003",
                "crop_type": "Soybeans",
                "harvest_date": "2023-08-25",
                "processing": {
                    "batch_id": "B003",
                    "process_date": "2023-08-27",
                    "processing_details": "Shelled and packed",
                    "distribution": {
                        "route_id": "R003",
                        "distribution_date": "2023-08-30",
                        "distributor_name": "Soybean Express",
                        "route": "Farm C to City D",
                        "consumer": {
                            "consumer_id": "CO003",
                            "order_id": "O003",
                            "delivery_date": "2023-09-01",
                            "feedback": "Fresh and clean"
                        }
                    }
                }
            }]
        },
        {
            "farm_id": "F004",
            "farm_name": "Maple Leaf Farms",
            "location": "Vermont, USA",
            "farmer_contact": "456-789-0123",
            "crops": [{
                "crop_id": "C004",
                "crop_type": "Maple Syrup",
                "harvest_date": "2023-10-10",
                "processing": {
                    "batch_id": "B004",
                    "process_date": "2023-10-12",
                    "processing_details": "Bottled and labeled",
                    "distribution": {
                        "route_id": "R004",
                        "distribution_date": "2023-10-15",
                        "distributor_name": "Maple Movers",
                        "route": "Farm D to City E",
                        "consumer": {
                            "consumer_id": "CO004",
                            "order_id": "O004",
                            "delivery_date": "2023-10-17",
                            "feedback": "Delicious taste"
                        }
                    }
                }
            }]
        },
        {
            "farm_id": "F005",
            "farm_name": "Riverbank Orchards",
            "location": "Washington, USA",
            "farmer_contact": "567-890-1234",
            "crops": [{
                "crop_id": "C005",
                "crop_type": "Apples",
                "harvest_date": "2023-09-01",
                "processing": {
                    "batch_id": "B005",
                    "process_date": "2023-09-03",
                    "processing_details": "Washed and packed",
                    "distribution": {
                        "route_id": "R005",
                        "distribution_date": "2023-09-06",
                        "distributor_name": "Apple Distribution Co.",
                        "route": "Farm E to City F",
                        "consumer": {
                            "consumer_id": "CO005",
                            "order_id": "O005",
                            "delivery_date": "2023-09-08",
                            "feedback": "Crisp and juicy"
                        }
                    }
                }
            }]
        },
        {
            "farm_id": "F006",
            "farm_name": "Golden Fields",
            "location": "Nebraska, USA",
            "farmer_contact": "678-901-2345",
            "crops": [{
                "crop_id": "C006",
                "crop_type": "Barley",
                "harvest_date": "2023-07-22",
                "processing": {
                    "batch_id": "B006",
                    "process_date": "2023-07-24",
                    "processing_details": "Cleaned and malted",
                    "distribution": {
                        "route_id": "R006",
                        "distribution_date": "2023-07-28",
                        "distributor_name": "Grain Haulers",
                        "route": "Farm F to City G",
                        "consumer": {
                            "consumer_id": "CO006",
                            "order_id": "O006",
                            "delivery_date": "2023-07-30",
                            "feedback": "High quality"
                        }
                    }
                }
            }]
        },
        {
            "farm_id": "F007",
            "farm_name": "Blue Mountain Farm",
            "location": "Colorado, USA",
            "farmer_contact": "789-012-3456",
            "crops": [{
                "crop_id": "C007",
                "crop_type": "Blueberries",
                "harvest_date": "2023-08-18",
                "processing": {
                    "batch_id": "B007",
                    "process_date": "2023-08-20",
                    "processing_details": "Packed in trays",
                    "distribution": {
                        "route_id": "R007",
                        "distribution_date": "2023-08-22",
                        "distributor_name": "Berry Movers",
                        "route": "Farm G to City H",
                        "consumer": {
                            "consumer_id": "CO007",
                            "order_id": "O007",
                            "delivery_date": "2023-08-25",
                            "feedback": "Sweet and fresh"
                        }
                    }
                }
            }]
        },
        {
            "farm_id": "F008",
            "farm_name": "Green Hills Farm",
            "location": "Kentucky, USA",
            "farmer_contact": "890-123-4567",
            "crops": [{
                "crop_id": "C008",
                "crop_type": "Tobacco",
                "harvest_date": "2023-06-30",
                "processing": {
                    "batch_id": "B008",
                    "process_date": "2023-07-02",
                    "processing_details": "Cured and baled",
                    "distribution": {
                        "route_id": "R008",
                        "distribution_date": "2023-07-05",
                        "distributor_name": "Leaf Logistics",
                        "route": "Farm H to City I",
                        "consumer": {
                            "consumer_id": "CO008",
                            "order_id": "O008",
                            "delivery_date": "2023-07-07",
                            "feedback": "Excellent quality"
                        }
                    }
                }
            }]
        },
        {
            "farm_id": "F009",
            "farm_name": "Sunrise Dairy",
            "location": "Wisconsin, USA",
            "farmer_contact": "901-234-5678",
            "crops": [{
                "crop_id": "C009",
                "crop_type": "Milk",
                "harvest_date": "2023-10-10",
                "processing": {
                    "batch_id": "B009",
                    "process_date": "2023-10-11",
                    "processing_details": "Pasteurized and bottled",
                    "distribution": {
                        "route_id": "R009",
                        "distribution_date": "2023-10-12",
                        "distributor_name": "Dairy Delivery",
                        "route": "Farm I to City J",
                        "consumer": {
                            "consumer_id": "CO009",
                            "order_id": "O009",
                            "delivery_date": "2023-10-14",
                            "feedback": "Fresh and creamy"
                        }
                    }
                }
            }]
        },
        {
            "farm_id": "F010",
            "farm_name": "Red Barn Farm",
            "location": "Ohio, USA",
            "farmer_contact": "012-345-6789",
            "crops": [{
                "crop_id": "C010",
                "crop_type": "Tomatoes",
                "harvest_date": "2023-08-15",
                "processing": {
                    "batch_id": "B010",
                    "process_date": "2023-08-17",
                    "processing_details": "Sorted and packed",
                    "distribution": {
                        "route_id": "R010",
                        "distribution_date": "2023-08-19",
                        "distributor_name": "Tomato Transit",
                        "route": "Farm J to City K",
                        "consumer": {
                            "consumer_id": "CO010",
                            "order_id": "O010",
                            "delivery_date": "2023-08-21",
                            "feedback": "Perfectly ripe"
                        }
                    }
                }
            }]
        },
        {
            "farm_id": "F011",
            "farm_name": "Happy Valley Farms",
            "location": "Oregon, USA",
            "farmer_contact": "111-222-3333",
            "crops": [
                {
                    "crop_id": "C011",
                    "crop_type": "Peaches",
                    "harvest_date": "2023-08-10",
                    "processing": {
                        "batch_id": "B011",
                        "process_date": "2023-08-12",
                        "processing_details": "Washed and packaged",
                        "distribution": {
                            "route_id": "R011",
                            "distribution_date": "2023-08-15",
                            "distributor_name": "Fruit Forward",
                            "route": "Farm K to City L",
                            "consumer": {
                                "consumer_id": "CO011",
                                "order_id": "O011",
                                "delivery_date": "2023-08-17",
                                "feedback": "Sweet and juicy"
                            }
                        }
                    }
                },
                {
                    "crop_id": "C012",
                    "crop_type": "Cherries",
                    "harvest_date": "2023-07-25",
                    "processing": {
                        "batch_id": "B012",
                        "process_date": "2023-07-27",
                        "processing_details": "Pitted and frozen",
                        "distribution": {
                            "route_id": "R012",
                            "distribution_date": "2023-07-30",
                            "distributor_name": "Berry Best",
                            "route": "Farm K to City L",
                            "consumer": {
                                "consumer_id": "CO012",
                                "order_id": "O012",
                                "delivery_date": "2023-08-01",
                                "feedback": "Excellent flavor"
                            }
                        }
                    }
                }
            ]
        },
        {
            "farm_id": "F012",
            "farm_name": "Crescent Moon Farms",
            "location": "Florida, USA",
            "farmer_contact": "222-333-4444",
            "crops": [
                {
                    "crop_id": "C013",
                    "crop_type": "Cucumbers",
                    "harvest_date": "2023-09-05",
                    "processing": {
                        "batch_id": "B013",
                        "process_date": "2023-09-07",
                        "processing_details": "Sliced and packaged",
                        "distribution": {
                            "route_id": "R013",
                            "distribution_date": "2023-09-10",
                            "distributor_name": "Veggie Express",
                            "route": "Farm M to City N",
                            "consumer": {
                                "consumer_id": "CO013",
                                "order_id": "O013",
                                "delivery_date": "2023-09-12",
                                "feedback": "Very fresh"
                            }
                        }
                    }
                },
                {
                    "crop_id": "C014",
                    "crop_type": "Bell Peppers",
                    "harvest_date": "2023-09-20",
                    "processing": {
                        "batch_id": "B014",
                        "process_date": "2023-09-22",
                        "processing_details": "Chopped and vacuum sealed",
                        "distribution": {
                            "route_id": "R014",
                            "distribution_date": "2023-09-25",
                            "distributor_name": "Farm to Fork",
                            "route": "Farm M to City N",
                            "consumer": {
                                "consumer_id": "CO014",
                                "order_id": "O014",
                                "delivery_date": "2023-09-27",
                                "feedback": "Great for salads"
                            }
                        }
                    }
                }
            ]
        },
        {
            "farm_id": "F013",
            "farm_name": "Eagle View Farms",
            "location": "Idaho, USA",
            "farmer_contact": "333-444-5555",
            "crops": [
                {
                    "crop_id": "C015",
                    "crop_type": "Potatoes",
                    "harvest_date": "2023-08-30",
                    "processing": {
                        "batch_id": "B015",
                        "process_date": "2023-09-01",
                        "processing_details": "Washed and sorted",
                        "distribution": {
                            "route_id": "R015",
                            "distribution_date": "2023-09-05",
                            "distributor_name": "Idaho Spud Co.",
                            "route": "Farm O to City P",
                            "consumer": {
                                "consumer_id": "CO015",
                                "order_id": "O015",
                                "delivery_date": "2023-09-07",
                                "feedback": "Perfectly cooked"
                            }
                        }
                    }
                },
                {
                    "crop_id": "C016",
                    "crop_type": "Carrots",
                    "harvest_date": "2023-09-10",
                    "processing": {
                        "batch_id": "B016",
                        "process_date": "2023-09-12",
                        "processing_details": "Washed and cut",
                        "distribution": {
                            "route_id": "R016",
                            "distribution_date": "2023-09-15",
                            "distributor_name": "Fresh Roots",
                            "route": "Farm O to City P",
                            "consumer": {
                                "consumer_id": "CO016",
                                "order_id": "O016",
                                "delivery_date": "2023-09-17",
                                "feedback": "Crunchy and sweet"
                            }
                        }
                    }
                }
            ]
        },
        {
            "farm_id": "F014",
            "farm_name": "Sunny Meadows",
            "location": "Maine, USA",
            "farmer_contact": "444-555-6666",
            "crops": [
                {
                    "crop_id": "C017",
                    "crop_type": "Raspberries",
                    "harvest_date": "2023-07-15",
                    "processing": {
                        "batch_id": "B017",
                        "process_date": "2023-07-17",
                        "processing_details": "Frozen and packed",
                        "distribution": {
                            "route_id": "R017",
                            "distribution_date": "2023-07-20",
                            "distributor_name": "Berry Best",
                            "route": "Farm Q to City R",
                            "consumer": {
                                "consumer_id": "CO017",
                                "order_id": "O017",
                                "delivery_date": "2023-07-22",
                                "feedback": "Deliciously sweet"
                            }
                        }
                    }
                },
                {
                    "crop_id": "C018",
                    "crop_type": "Blackberries",
                    "harvest_date": "2023-08-01",
                    "processing": {
                        "batch_id": "B018",
                        "process_date": "2023-08-03",
                        "processing_details": "Canned and sealed",
                        "distribution": {
                            "route_id": "R018",
                            "distribution_date": "2023-08-05",
                            "distributor_name": "Sweet Harvest",
                            "route": "Farm Q to City R",
                            "consumer": {
                                "consumer_id": "CO018",
                                "order_id": "O018",
                                "delivery_date": "2023-08-07",
                                "feedback": "Tasty and versatile"
                            }
                        }
                    }
                }
            ]
        },
        {
            "farm_id": "F015",
            "farm_name": "Maple Ridge Farms",
            "location": "New York, USA",
            "farmer_contact": "555-666-7777",
            "crops": [
                {
                    "crop_id": "C019",
                    "crop_type": "Pears",
                    "harvest_date": "2023-09-05",
                    "processing": {
                        "batch_id": "B019",
                        "process_date": "2023-09-07",
                        "processing_details": "Sliced and canned",
                        "distribution": {
                            "route_id": "R019",
                            "distribution_date": "2023-09-10",
                            "distributor_name": "Fruit Freight",
                            "route": "Farm S to City T",
                            "consumer": {
                                "consumer_id": "CO019",
                                "order_id": "O019",
                                "delivery_date": "2023-09-12",
                                "feedback": "Sweet and tender"
                            }
                        }
                    }
                },
                {
                    "crop_id": "C020",
                    "crop_type": "Plums",
                    "harvest_date": "2023-09-15",
                    "processing": {
                        "batch_id": "B020",
                        "process_date": "2023-09-17",
                        "processing_details": "Dried and packaged",
                        "distribution": {
                            "route_id": "R020",
                            "distribution_date": "2023-09-20",
                            "distributor_name": "Harvest Time",
                            "route": "Farm S to City T",
                            "consumer": {
                                "consumer_id": "CO020",
                                "order_id": "O020",
                                "delivery_date": "2023-09-22",
                                "feedback": "Great for snacking"
                            }
                        }
                    }
                }
            ]
        },
        {
            "farm_id": "F016",
            "farm_name": "Twin Oaks Farm",
            "location": "Illinois, USA",
            "farmer_contact": "666-777-8888",
            "crops": [
                {
                    "crop_id": "C021",
                    "crop_type": "Eggplants",
                    "harvest_date": "2023-09-05",
                    "processing": {
                        "batch_id": "B021",
                        "process_date": "2023-09-07",
                        "processing_details": "Sliced and packaged",
                        "distribution": {
                            "route_id": "R021",
                            "distribution_date": "2023-09-10",
                            "distributor_name": "Veggie Ventures",
                            "route": "Farm U to City V",
                            "consumer": {
                                "consumer_id": "CO021",
                                "order_id": "O021",
                                "delivery_date": "2023-09-12",
                                "feedback": "Great taste"
                            }
                        }
                    }
                },
                {
                    "crop_id": "C022",
                    "crop_type": "Zucchini",
                    "harvest_date": "2023-09-15",
                    "processing": {
                        "batch_id": "B022",
                        "process_date": "2023-09-17",
                        "processing_details": "Shredded and frozen",
                        "distribution": {
                            "route_id": "R022",
                            "distribution_date": "2023-09-20",
                            "distributor_name": "Fresh Farm Co.",
                            "route": "Farm U to City V",
                            "consumer": {
                                "consumer_id": "CO022",
                                "order_id": "O022",
                                "delivery_date": "2023-09-22",
                                "feedback": "Great for baking"
                            }
                        }
                    }
                }
            ]
        },
        {
            "farm_id": "F017",
            "farm_name": "Hilltop Gardens",
            "location": "Virginia, USA",
            "farmer_contact": "777-888-9999",
            "crops": [
                {
                    "crop_id": "C023",
                    "crop_type": "Spinach",
                    "harvest_date": "2023-09-10",
                    "processing": {
                        "batch_id": "B023",
                        "process_date": "2023-09-12",
                        "processing_details": "Washed and packaged",
                        "distribution": {
                            "route_id": "R023",
                            "distribution_date": "2023-09-15",
                            "distributor_name": "Green Leaf Co.",
                            "route": "Farm W to City X",
                            "consumer": {
                                "consumer_id": "CO023",
                                "order_id": "O023",
                                "delivery_date": "2023-09-17",
                                "feedback": "Very fresh"
                            }
                        }
                    }
                },
                {
                    "crop_id": "C024",
                    "crop_type": "Kale",
                    "harvest_date": "2023-09-20",
                    "processing": {
                        "batch_id": "B024",
                        "process_date": "2023-09-22",
                        "processing_details": "Chopped and packaged",
                        "distribution": {
                            "route_id": "R024",
                            "distribution_date": "2023-09-25",
                            "distributor_name": "Fresh Greens",
                            "route": "Farm W to City X",
                            "consumer": {
                                "consumer_id": "CO024",
                                "order_id": "O024",
                                "delivery_date": "2023-09-27",
                                "feedback": "Great for salads"
                            }
                        }
                    }
                }
            ]
        },
        {
            "farm_id": "F018",
            "farm_name": "Lakeside Farms",
            "location": "Michigan, USA",
            "farmer_contact": "888-999-0000",
            "crops": [
                {
                    "crop_id": "C025",
                    "crop_type": "Cauliflower",
                    "harvest_date": "2023-08-20",
                    "processing": {
                        "batch_id": "B025",
                        "process_date": "2023-08-22",
                        "processing_details": "Cut and packaged",
                        "distribution": {
                            "route_id": "R025",
                            "distribution_date": "2023-08-25",
                            "distributor_name": "Veggie Hub",
                            "route": "Farm Y to City Z",
                            "consumer": {
                                "consumer_id": "CO025",
                                "order_id": "O025",
                                "delivery_date": "2023-08-27",
                                "feedback": "Very fresh"
                            }
                        }
                    }
                },
                {
                    "crop_id": "C026",
                    "crop_type": "Broccoli",
                    "harvest_date": "2023-08-25",
                    "processing": {
                        "batch_id": "B026",
                        "process_date": "2023-08-27",
                        "processing_details": "Chopped and frozen",
                        "distribution": {
                            "route_id": "R026",
                            "distribution_date": "2023-08-30",
                            "distributor_name": "Green Harvest",
                            "route": "Farm Y to City Z",
                            "consumer": {
                                "consumer_id": "CO026",
                                "order_id": "O026",
                                "delivery_date": "2023-09-01",
                                "feedback": "Great for stir-fry"
                            }
                        }
                    }
                }
            ]
        },
        {
            "farm_id": "F019",
            "farm_name": "Meadowland Farms",
            "location": "Georgia, USA",
            "farmer_contact": "999-000-1111",
            "crops": [
                {
                    "crop_id": "C027",
                    "crop_type": "Strawberries",
                    "harvest_date": "2023-06-15",
                    "processing": {
                        "batch_id": "B027",
                        "process_date": "2023-06-17",
                        "processing_details": "Washed and packed",
                        "distribution": {
                            "route_id": "R027",
                            "distribution_date": "2023-06-20",
                            "distributor_name": "Berry Best",
                            "route": "Farm AA to City BB",
                            "consumer": {
                                "consumer_id": "CO027",
                                "order_id": "O027",
                                "delivery_date": "2023-06-22",
                                "feedback": "Sweet and delicious"
                            }
                        }
                    }
                },
                {
                    "crop_id": "C028",
                    "crop_type": "Blackberries",
                    "harvest_date": "2023-06-20",
                    "processing": {
                        "batch_id": "B028",
                        "process_date": "2023-06-22",
                        "processing_details": "Frozen and packaged",
                        "distribution": {
                            "route_id": "R028",
                            "distribution_date": "2023-06-25",
                            "distributor_name": "Berry World",
                            "route": "Farm AA to City BB",
                            "consumer": {
                                "consumer_id": "CO028",
                                "order_id": "O028",
                                "delivery_date": "2023-06-27",
                                "feedback": "Great for smoothies"
                            }
                        }
                    }
                }
            ]
        },
        {
            "farm_id": "F020",
            "farm_name": "Golden Acres Farm",
            "location": "Alabama, USA",
            "farmer_contact": "000-111-2222",
            "crops": [
                {
                    "crop_id": "C029",
                    "crop_type": "Watermelons",
                    "harvest_date": "2023-08-01",
                    "processing": {
                        "batch_id": "B029",
                        "process_date": "2023-08-03",
                        "processing_details": "Cut and packaged",
                        "distribution": {
                            "route_id": "R029",
                            "distribution_date": "2023-08-05",
                            "distributor_name": "Fruit Delivery Co.",
                            "route": "Farm CC to City DD",
                            "consumer": {
                                "consumer_id": "CO029",
                                "order_id": "O029",
                                "delivery_date": "2023-08-07",
                                "feedback": "Refreshing and sweet"
                            }
                        }
                    }
                },
                {
                    "crop_id": "C030",
                    "crop_type": "Cantaloupes",
                    "harvest_date": "2023-08-10",
                    "processing": {
                        "batch_id": "B030",
                        "process_date": "2023-08-12",
                        "processing_details": "Sliced and packaged",
                        "distribution": {
                            "route_id": "R030",
                            "distribution_date": "2023-08-15",
                            "distributor_name": "Melon Masters",
                            "route": "Farm CC to City DD",
                            "consumer": {
                                "consumer_id": "CO030",
                                "order_id": "O030",
                                "delivery_date": "2023-08-17",
                                "feedback": "Sweet and juicy"
                            }
                        }
                    }
                }
            ]
        }
    ]; // Removed extra bracket here    
    
const seedDB = async () => {
    await Farm.deleteMany({}); // This line should work now
    await Farm.insertMany(farmsData);
    console.log("Database seeded!");
    mongoose.connection.close();
};

seedDB();
