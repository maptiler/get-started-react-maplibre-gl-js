export const fetchPetrolPumps = async (latitude,longitude)=>{
    try{
        const response = await fetch(`https://overpass-api.de/api/interpreter?data=[out:json];(node[%27amenity%27=%27fuel%27](around:5000,${latitude},${longitude});way[%27amenity%27=%27fuel%27](around:2000,${latitude},${longitude}););out;`);
        if(!response.ok){
            throw new Error("Failed to fetch");
        }

        const data = await response.json();

        const pumpCoordinates = data.elements.map((element)=>({
            latitude : element.lat,
            longitude: element.lon,
            name : element.tags.name || "Resouce Owner",
        }))
        return pumpCoordinates;
    }catch(e){
        console.error("Failed to fetch the resources points:",e);
    }
}
//around:5000 is used in the node part of the query. It means that the query is searching for nodes (points) with the tag amenity=fuel within a radius of 5000 meters (5 kilometers) from the specified latitude and longitude.

// around:2000 is used in the way part of the query. Similarly, it means that the query is searching for ways (areas) with the tag amenity=fuel within a radius of 2000 meters (2 kilometers) from the specified latitude and longitude.