# AlgoViz
<img width="1161" alt="Screen Shot 2022-03-19 at 9 12 24 PM" src="https://user-images.githubusercontent.com/52815609/161297708-5d8f738d-e1ef-4945-aed0-52b4bf2d18f8.png">

# Deployed Via Heroku
https://algowizz.herokuapp.com/

## Dijkstra's Algorithm
Dijkstra's Algorithm works by starting at the start node. For a brief second, it forgets about the target node and says every other node on the graph has a distance equal to infinity from our starting node. Then it grabs all the direct neighbors to the starting node, for our case, they are up, right, left, and down. In the case of a realistic graph, for example, a city, the direct neighboring nodes would be the different roads you can go by. Once all the neighbors are collected, their distances update to 1, the distance from our starting node. Then it gets the next set of neighbor nodes and updates their value to the starting node. This process repeats until we hit our end node or, in the realistic example of a city, our final destination.
