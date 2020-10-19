import React from "react";
import ListComponent from "./ListComponent";
import { connect } from "react-redux";
import * as listActions from "../redux/actions/listActions";
import * as langActions from "../redux/actions/langActions";
import * as editAction from "../redux/actions/editAction";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import AddrowComponent from "./AddrowComponent";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from "../static/img/logo.png";
import LoaderComponent from "./LoaderComponent";


class ManageListComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      q: "",
      language: '',
      isAddRowSectionOpen : false
    }
    //this.filterTableData = this.filterTableData.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.wrapper = React.createRef();
  }
  componentDidMount() {
    const { langs, actions } = this.props;

    if (langs.length === 0) {
      actions.loadLangs().catch(error => {
        alert("Loading failed" + error);
      });
    }
  }

  onChangeHandler = event => {
    this.setState({ q: event.target.value.toLowerCase() });
  }

  sortByLanguage = (lists) => {
    return lists.filter(row => {
      if (row.id && row.value && row.language) {
        return row.language.toLowerCase().indexOf(this.state.language) > -1
      }
    })
  }

  filterTableData = (lists) => {
    return lists.filter(row => {
      if (row.id && row.value && row.language) {
        return row.id.toLowerCase().indexOf(this.state.q) > -1 ||
          row.value.toLowerCase().indexOf(this.state.q) > -1
      }
    }
    )
  }

  toggleAddSection = () =>{
    this.setState(prevState => ({
      ...prevState,
      isAddRowSectionOpen: !this.state.isAddRowSectionOpen

    }))
  }
 
  handleChange = (event) => {
    let currentValue = event.target.value
    this.setState(prevState => ({
      ...prevState,
      language: currentValue

    }))
    this.filterTableData(this.props.lists, currentValue, 'lang')
  };

  render() {
    const { lists, langs, loader } = this.props;
    return (
      <>
        <div className="container">
          <div className="row">
            {/* header */}
            <header>
              <div className="col-12">
                <div className="row">
                  <img src={logo} alt="" />
                </div>
              </div>
            </header>
            {/* Add New Row */}
            <div className="add_section col-12">
              <div className="row">
                <div className="plus-minus-toggle collapsed" onClick={this.toggleAddSection}></div>
              </div>
              
              <div className="row" >
              {
                this.state.isAddRowSectionOpen ? <AddrowComponent props={this.props} toggleAddSection={this.toggleAddSection} /> :null
              }
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="col-12 height_search">
            <div className="row">
              <input type="{this.state.q}" onChange={this.onChangeHandler} placeholder="Search" className="px-2 w-100 global_search" />
              <div className="search"></div>
            </div>
          </div>

          {/* Dropdown */}
          <div className="col-1 offset-11">
            <div className="row">
              <select value={this.state.language || "All"} onChange={this.handleChange} className="w-100 form-control mb-3">
                <option value="">All</option>
                {langs.map(lang => { return <option key={lang.id} value={lang.language}>{lang.language}</option> })}
              </select>             
            </div>
          </div>
          <div className="col-12">
            <div className="row">
              {(lists.length) ? <ListComponent list={this.sortByLanguage(this.filterTableData(lists))} props={this.props} /> : null}
              <ToastContainer />
            </div>
            <LoaderComponent isVisible={loader.value }/> 
          </div>
          
        </div>
      </>
    );
  }

}

ManageListComponent.propTypes = {
  lists: PropTypes.array.isRequired,
  loader: PropTypes.any.isRequired,
  langs: PropTypes.array.isRequired,
  rowId: PropTypes.any.isRequired,
  actions: PropTypes.object.isRequired

};

function mapStateToProps(state) {
  return {
    lists: state.lists,
    langs: state.langs,
    rowId: state.rowId,
    loader: state.loader
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadLists: bindActionCreators(listActions.loadLists, dispatch),
      loadLangs: bindActionCreators(langActions.loadLangs, dispatch),
      changeId: bindActionCreators(editAction.changeId, dispatch),
      updateRow: bindActionCreators(editAction.updateRow, dispatch),
      addRow: bindActionCreators(editAction.addRow, dispatch),
      toggleLoader: bindActionCreators(editAction.toggleLoader, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageListComponent);
