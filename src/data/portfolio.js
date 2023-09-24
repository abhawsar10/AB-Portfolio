export default [
    {
        title: 'Transit Route Optimization using Uber/Lyft Data',
        domain: 'Machine Learning, Optimization',
        date: 'February 2023',
        img_Url: 'src/assets/uber.JPG',
        stack: ['Python','Keras','Pandas'],
        link: 'https://github.com/abhawsar10/Machine-Learning-Projects/tree/main/Transit%20Route%20Optimization',
        details: ["Optimizing routing of transit services in and around the greater Boston Area using various machine learning models.","The project began with processing the data from rideshare records from Uber and Lyft.","Machine learning models included demand forecasting using ARIMA and SARIMAX and XGBoost.","Performed customer segmentation using K-means clustering to determine city hotspots.","Used Gurobi Optimization on UFLP model to plan efficient city transit routes."]
    },
    {
        title: 'Case Study: Profit Optimization for Real Estate Construction',
        domain: 'Operations Research',
        date: 'November 2022',
        img_Url: 'src/assets/milp.jpg',
        stack: ['Gurobi','AMPL'],
        link: 'https://github.com/abhawsar10/Optimization-Analytics/tree/main/Case%20Study%201',
        details: ["Mixed Integer Linear Programming Project to maximize profit for Lake Saddleback Development Corporation on 300 acres of land.","The problem involved dozens of variables and conditions to consider before optimizing for profit.","Formulated the problem and ran it in AMPL to optimize the number and types of various floor plans that can be constructed.","Conducted sensitivity analysis and presented a detailed report on how modifying each constraint and variable would affect the profits."]
    },
    {
        title: 'Yelp Business Closure Predictions ',
        domain: 'Machine Learning',
        date: 'November 2022',
        img_Url: 'src/assets/yelp.jpg',
        stack: ['Python','Scikit-learn','Pandas'],
        link: 'https://github.com/abhawsar10/Machine-Learning-Projects/tree/main/Yelp%20Business%20Prediction',
        details: ["Developed a project to predict whether a given business listed on Yelp will close or continue operations in the coming years using Python, SciKit, and TensorFlow.","Utilized a publicly available dataset with approximately 150,000 observations.","Employed Natural Language Processing for Sentiment Analysis on business reviews.","Ran multiple machine learning models on the data, including Logistic Regression, LDA, CART, Random Forest, and Neural Networks, achieving an average accuracy of approximately 82% on the testing dataset.","Enhanced models using boosting techniques such as AdaBoost, XGBoost, and CatBoost, resulting in an average improvement of approximately 2%."]
    },
    {
        title: 'Indexing Fox News Webpages using Solr',
        domain: 'Information Retrieval',
        date: 'March 2022',
        img_Url: 'src/assets/fox.JPG',
        stack: ['Solr','Lucene','PHP'],
        link: 'https://github.com/abhawsar10/Information-Retrieval/tree/main/Indexing%20using%20Solr',
        details: ["Configured the Apache Solr server to index a set of 50,000 Fox News HTML webpages and enabled HTTPS requests to the server.","Implemented the PageRank algorithm using the networkx library to calculate ranks for all webpages.","Developed a front-end PHP search engine client to allow users to submit queries to both the PageRank and Lucene algorithms.","Discovered an average overlap of 6% in the results of ranking strategies used by Lucene and Google, indicating differences in techniques."]
    },
    {
        title: 'Semantic Segmentation using Modified Fully Convolutional Networks',
        domain: 'Computer Vision',
        date: 'November 2021',
        img_Url: 'src/assets/semseg.png',
        stack: ['Python','OpenCV','Google Colab'],
        link: 'https://github.com/abhawsar10/Computer-Vision/tree/main/Semantic%20Segmentation%20using%20FCN',
        details: ["Conducted research under Prof. Ram Nevatia, Director of IRIS Lab at USC, as part of a group of 3 PhD students.","Utilized a modified version of FCN32 and FCN16 with a ResNet-18 backbone for semantic segmentation of traffic dash cam images into 10 categories.","Trained the model on the Kitti Vision dataset, which consists of images captured from vehicles driving in busy traffic conditions.","Achieved a Mean Pixel-Level Intersection-over-Union (IoU) of 0.21, indicating the model's performance in semantic segmentation."]
    },
    {
        title: 'Object Classification using Modified LeNet5',
        domain: 'Computer Vision',
        date: 'October 2021',
        img_Url: './src/assets/lenet.png',
        stack: ['Python','PyTorch','Google Colab'],
        link: 'https://github.com/abhawsar10/Computer-Vision/tree/3b0668ae1477f1e5fe3b1a4b1105a6fd1dfc1cab/LeNet%205%20Implementation',
        details: ["Constructed a LeNet-5 style Convolutional Neural Network (Modified from the 1998 paper), using PyTorch functions.","Used STL-10 Dataset for training containing 5000 96x96 RGB images","Conducted 2 Experiments with variantions: first with L2 Regularization, second with Batch Normalization","Experiments with Regularization showed a decrease in both Training and Testing Accuracies."]
    },
    {
        title: 'Object Detection using SIFT Descriptors',
        domain: 'Computer Vision',
        date: 'October 2021',
        img_Url: 'src/assets/sift.jpg',
        stack: ['Python','OpenCV','Google Colab'],
        link: 'https://github.com/abhawsar10/Computer-Vision/tree/3b0668ae1477f1e5fe3b1a4b1105a6fd1dfc1cab/Object%20Detection%20using%20SIFT%20Descriptors',
        details: ["Created and computed Scale Invariant Feature Transform (SIFT) descriptors for a dataset of images containing specific objects (books), which were used to estimate the homography matrix.","Applied a brute-force matcher to detect specific objects (books) within complex still life images."]
    },
    {
        title: 'Bouding Box Generation using Selective Search',
        domain: 'Computer Vision',
        date: 'October 2021',
        img_Url: '/assets/selective search.jpeg',
        stack: ['Python','OpenCV','Google Colab'],
        link: 'https://github.com/abhawsar10/Computer-Vision/tree/3b0668ae1477f1e5fe3b1a4b1105a6fd1dfc1cab/Selective%20Search%20Algorithm',
        details: ["Experimented with Selective Search Algorithms for bounding box generation","Applied 2 Stategies: Firstly, using image colour only, and second using all four similarities (color, texture, size, fill)."]
    },
    // {
    //     title: 'USC Films - Android App',
    //     domain: 'Web Technologies',
    //     date: 'April 2021',
    //     img_Url: '/assets/placeholder.jpg',
    //     stack: ['Java','Android SDK'],
    //     link: 'https://github.com/abhawsar10/Android-Dev/tree/main/USC%20Films%20App',
    //     details: ["Developed an Android application version of the USC Films Website using Java and Android Studio.","The goal was to provide an optimized and native user experience on mobile devices."]
    // },
    {
        title: 'BHAWS Flix Website',
        domain: 'Web Technologies',
        date: 'March 2021',
        img_Url: '/assets/bhaws.jpg',
        stack: ['Angular','NodeJS','Express'],
        link: 'https://bhaws-flix.uw.r.appspot.com/',
        // link: {"Link":'https://bhaws-flix.uw.r.appspot.com/',"Github":'https://github.com/abhawsar10/BHAWS-Flix-Website'},
        details: ["Developed a web application using Angular, Bootstrap, and HTML5 that showcases the latest movies and TV shows.","It allows users to watch trailers and receive recommendations based on their selected movies.","Utilized the TMDB API to fetch movie, TV, and actor data and integrated YouTube's API to display trailers.","Implemented a Watch-list feature using the Web Storage API, enabling users to manage their personal list of movies and TV shows.","Created the backend using ExpressJS and hosted the application on the Google Cloud platform."]
    },
    {
        title: "Game Playing AI agent for 'Go'",
        domain: 'Reinforcement Learning',
        date: 'November 2020',
        img_Url: '/assets/Go.jpeg',
        stack: ['Python','ML','Q Learning'],
        link: 'https://github.com/abhawsar10/-Go-Playing-AI-Agent',
        details: ["Developed game-playing agents capable of competing in the board game 'Go' using Artificial Intelligence techniques.","Implemented two different techniques: Utilized Minimax with Alpha-Beta pruning to play against amateur and random opponents.","Employed Q-Learning to compete against competition-level opponents.","Incorporated self-devised heuristics based on research papers to train bots using Q-Learning."]
    },
    {
        title: "Word Sense Disambiguation (WSD) using Neural Networks",
        domain: 'Natural Language Processing',
        date: 'February 2020',
        img_Url: '/assets/word2vec.png',
        stack: ['Python','WordNet','Keras'],
        link: 'https://github.com/abhawsar10/Word-Sense-Disambiguation-using-Neural-Networks',
        details: ["Developed Artificial Neural Networks for predicting word senses based on sentence context.","Used Word2Vec to create word embeddings for highly ambiguous words based on two datasets, OMSTI and SemCor, which together contained over one million sense-tagged instances of words based on WordNet senses.","Achieved over 80% accuracy on SemEval Tasks.","Presented a seminar at the International Conference on Pervasive Computing 2020 on Supervised Learning approaches to Word Sense Disambiguation (WSD)."]
    },
    {
        title: "Airline Ticketing System",
        domain: 'Database Management',
        date: 'March 2019',
        img_Url: '/assets/airline.jpg',
        stack: ['Java','MySQL','Python'],
        link: 'https://github.com/abhawsar10/Java-MySQL-Airline-Ticketing-Project',
        details: ["Developed software for booking airfare tickets online.","Created a backend database deployed on an Apache server using phpMyAdmin.","Implemented front-end database queries using Java.","Generated data to populate the databases using Python packages like pydbgen and faker.","The project achieved the 1st rank among a class of 160 students."]
    }
]