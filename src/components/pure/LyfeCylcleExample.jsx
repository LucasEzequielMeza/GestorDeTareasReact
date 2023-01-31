/**
 * Ejemplo de componente de tipo clase que
 *  dispone de los metodos de cicli de vida
 * 
 */


class LyfeCycleExample extends Component {

    constructor (props) {
        super(props);
        console.log('CONSTRUCTOR: Cuando se instancia el componente')
    }

    componentWillMount () {
        console.log('WILLMOUNT: Antes del montaje del componente')
    }

    componentDidMount () {
        console.log('DIDMOUNT: Justo al montaje del componente, antes de renderizarlo')
    }

    componentWillReceiveProps (nextProps) {
        console.log('WillReceiveProps: Si va a recivir nuevos props')
    }

    shouldComponentUpdate (nextProps, nextState) {
        /**
         * Controla si el componente debe o no actualizarse
         */
        // return true o false
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WillUpdate: Justo antes de actualizarse')
    }

    componentDidUpdate (nextProps, nextState) {
        console.log('DidUpdate: Justo despues de actualizarse')
    }

    componentWillUnmount () {
        console.log('WillUnmount: Justo antes de desaparecer')
    }

    render () {
        return (
            <div></div>
        )
    }
}

export default LyfeCycleExample