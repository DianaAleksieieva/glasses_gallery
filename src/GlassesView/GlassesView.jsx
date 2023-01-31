import GlassesList from "./GlassesList/GlassesList"
import GlassesHead from "./GlassesHead/GlassesHead"


const GlassesView = ({name}) => {
    
    
    return (<div>
        <GlassesHead name={name} />
        <GlassesList />
    </div>)
}
export default GlassesView