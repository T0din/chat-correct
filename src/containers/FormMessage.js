import { connect } from 'react-redux';
import FormMessage from '../components/FormMessage';
import { messageSubmit, messageChange } from '../store/reducer';

const mapStateToProps = (state) => ({
    input: state.messageInput,
});

const mapDispatchToProps = (dispatch) => ({
    messageSubmit: () => {
        dispatch(messageSubmit());
    },
    messageChange: (text) => {
        dispatch(messageChange(text));
    }
});

const FormMessageContainer = connect(mapStateToProps, mapDispatchToProps)(FormMessage);

export default FormMessageContainer;