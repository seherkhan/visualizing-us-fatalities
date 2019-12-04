## PROJECT SUMMARY

### PROJECT INFORMATION

- Project title: Disease Control and Prevention Analysis
- Group name: GroupOne
- Team names: [Shraddha Kulkarni (shraddhk), Seher Khan (seherkha)]

### PROJECT ARTIFACTS

- [Demonstration URL](http://pdms.usc.edu/~seherkha/proj/)
- [Presentation PDF](<presentation-pdf-url>) and [transcript](<presentation-transcript-md-url>)
- [Article](<article-pdf-url>) and [Overleaf URL](https://www.overleaf.com/read/qdrprfctmrhc)
- [YouTube video](<youtube-video-url>)
        
          
# Project Implementation          
     
## PROJECT SUMMARY
Some of the leading causes of death in the United States include heart disease, cancer, alcoholism and injuries caused by accidents. Many of these are preventable, and being able to visualize the numbers could help us develop improved strategies to avoid and alleviate their occurrence. We expect our application to be useful for the general public. It will make them more aware of the diseases they are susceptible to based on their location and other demographic traits. 

Using various visualizations that we’ve learned this semester through the course Information Visualization we try to represent this information about various diseases and their effect on the Mortality rate of the country. 


### Visualizations
**1. Disease-Category Correspondence:** This visualization consists of two parts i.e. Bipartite Graph and Grouped Bar Chart. Both of them are used to display age-adjusted death rates for selected causes of death, by Category (sex, race, and Hispanic Origin) for selected years 1950-2016 in the United States. 
     
**2. Age Group Mortality Exploration - I:** The visualization consists of two pie charts and a table, for the year 1980 and 2016. There has been an attempt to compare the leading causes of death in the two respective years. Considering there are more than 35 years of difference, there is an expectation that the causes which were more relevant back then have taken been brought under control.    
   
**3. Age Group Mortality Exploration - II:** The Heapmap serves to highlight the trend in death rate across time and age-groups. The default “overall” view colors each cell with respect to its number. This is to highlight any concerning number immediately. We can then either select “Age” or “Years”, through which the cells color range can be altered.  
    
**4. Geographic Mortality Exploration:** This visualization consists of a Choropleth and a Bar Chart. It represents the data from year 1970 to 2016. Clicking a particular race, or origin, the choropleth changes dynamically.
    
**5. Healthcare Expenditure:** The Stacked Area Chart depicts the trend in public health expenditure in the US by category since the 1960s. Clicking on a specific category in the area chart (or the legend), update the second chart. This allows one to see trends in source of funding for a particular category. Clicking on the white chart area resets the second chart.   
   
**6. Area-wise Clustering:** The Circle Packing chart displays data of cancer cases by type and by region (division, subdivision, state and city) over the period 1999-2016. Clicking on the button of a cancer type colors the circle of that type in all bubbles.   


### Development
This project has been developed on the Vue.js framework. Separate components have been created for each of the charts created in Vue. D3.js is a JavaScript library for manipulating documents based on data,which we have used to construct our charts for visualizing. We used bootstrap for grid layout and CSS for styling and creating buttons.


### Node-Modules
Downloaded all the node-Modules via command line `install` statements. From all the node modules utilized bootstrap, pooper, d3 and jquery node-modules instead of directly importing through cdn. For this assignment, instead of using the CDN link of D3 used te D3 provided in the node modules.

For plotting maps and citites on maps we have used topojson, hence you also need to install topojson too.      
Use command `npm install topojson`     


### Visual-Studio
Used visual studio IDE for programming the assignment and Angular CLI.


### GitHub
Used Incremental commits. Updated Github README multiple times and commited changes in increments.


### Create Vue app
`$ sudo npm install -g @vue/cli`        
`$ vue create my-app`         
    
Vue CLI v4.1.1   
? Please pick a preset: (Use arrow keys)   
Manually select features   
? Pick a linter / formatter config: (Use arrow keys)   
ESLint with error prevention only    
    
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)   
Lint on save   
? Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)   
In dedicated config files    
? Save this as a preset for future projects? (y/N) y    
? Save preset as: present1   
    
`$ cd my-app`      
`$ npm run serve`    
    
    
### Bootstrap
Import Bootstrap in main.js   
For each page, create a new view  and add an entry in routes (index.js)    
For pages with multiple charts, create a component for each graph and then add those components to the corresponding view.   
    
    
### Deployment
`$ cd my-app`        
`delete node_modules fldr` // skipped     
`$ sudo npm install -g @vue/cli-service-global`         
`$ npm install` // skipped    
create vue.config.js along side package.json with production path set to '~seherkha/proj/'     
    
module.exports = {     
    publicPath: process.env.NODE_ENV === 'production'     
    ? '/~seherkha/proj/' //production path       
    : '/' //development path    
}  
   
`$ sudo npm run build`       
`$ sudo npm install -g serve`        
`$ serve -s dist`      
    
test locally using above command to put on pdms, transfer contents of dist folder to proj folder on pdms.    
     
The web page is deployed on USC SCF. Used FileZilla to transfer files from local machine to remote server. Follwing are the commands I followed to connect to the server.      
      
To see project [click here](<http://pdms.usc.edu/~seherkha/proj/>)
          
           
        
       
# INF 554 Assignment for 5: 

# Project Proposal     
   
## Slide 0: Cover Slide    
![Slide0](slides_imgs/cover.png)       
**Disease Control & Prevention Analysis** is a web application for visualizing data for diseases leading to death in the US

## Slide 1: Introduction - Motivation    
![Slide1](slides_imgs/motivation.png)      
* Some of the leading causes of death in the US include heart disease, cancer, alcholism and injuries caused by accidents    
* Many of these are preventable, and being able to visualize the numbers could help us develop improved strategies to avoid and alleviate their occurance    

## Slide 2: Introduction - Audience   
![Slide2](slides_imgs/audience.png)       
* We expect our application to be useful for the general public. It will make them more aware of the diseases they are suspectible to based on their location and other demographic traits
* Medical students could also benefit from knowing which fields require their interest the most
* Finally, policy makers would greatly benefit from a tool that would help identify major health problems in their region and so they can draft effective policies

   
In the next few Slides, we are going to cover the type of visualization we are planning to make for the project. One common features among all these visualizations is that user will be able to filter their results for a particular cause like heart disease, cancer, diabetes, etc.       

## Slide 3: Overall Picture    
![Slide3](slides_imgs/overall.png)      
* We will create various Bubble Charts, Strip Charts, Bar Charts and Heatmaps to analyze the spread of diseases in the whole Country.    
* These charts will help us understand the overall trends in the past 2 Decades.     

## Slide 4: State Comparision   
![Slide4](slides_imgs/statecomparision.png)      
* The next is the functionality through which the user will be able to draw comparisions between states.          
* User will be able to input 2 states of their choice, and based on their selection, we will display charts and plots comparing the two mentioned states.       

## Slide 5: Zooming into a Specific State
![Slide5](slides_imgs/withinastate.png)      
* Increased granuality of data.   
* In this one, we are going to split the window into two parts, the right side will display the overall geochart, and selecting a particular state in it, will pane into that porition of the map of the left hand side.    
* The Bottom charts will display charts pertaining to that State as seen in the image.     

## Slide 6: Historical
![Slide6](slides_imgs/historical.png)      
* Ability to see trends across the country and within a region for selected diseases.     
* Such time-series plots are very useful for Trend, Seasonality, and Cyclical Analysis.    

## Slide 7: Clustering
![Slide7](slides_imgs/clusteringregionsbasedondisease.png)      
* This is an additional part that we are thinking to implement. Since we have good knowledge of Clustering and Time-Series Prediction, we were thinking of applying some basic algorithms for the future prediction and visualizing the results onto the plot.    
* Clustering will help the policy-makers to come up with regulations for the similar set of states based on the conditions.    
* Besides, that Time-Series Prediction is very useful as it gives us a number predicting total number of deaths that could occur. Hence, knowing that preventive steps can be taken in advance.   

## Slide 8: Data Source    
![Slide8](slides_imgs/datasource.png)    
* We will be using data from the Centers for Diease Control and Prevention
* Their data can be filtered by time, disease and demographic attributes

## Slide 9: Technologies
![Slide9](slides_imgs/technologies.png)   
* The above technologies will be used. We will implement the features as we learn about them in the class.     
* Besides that we will refer to their official Documentations. There are a lot of examples given on D3.js website which are good for reference.    
* Both of us will be working on developing the visuals, one at a time. We will subsequently attach the code into our main html Template.   

## Slide 10: Timeline 
![Slide10](slides_imgs/timeline.png)        
* The figure explains it all.    
              
                
                  
               
  