import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getSingleJob } from "../../actions/jobs";

import "./styles/show-job-details.css";

export class ShowJobDetails extends Component {
  componentDidMount() {
    const { match: { params } } = this.props;
    this.props.getSingleJob(params.id);
  }

  render() {
    return (
      <section className="job-details">
        <h2>{this.props.job.companyName}</h2>
        <p>{this.props.job.companyLocation}</p>
        <p>{this.props.job.positionTitle}</p>
        <p>{this.props.job.companyType}</p>
        <p>{this.props.job.salary}</p>
        <p>{this.props.job.companyWebsite}</p>
        <p>{this.props.job.linkJobDescription}</p>
        <p>{this.props.job.jobStatus}</p>
        <p>{this.props.job.notes}</p>

        <Link to={`/jobs`}>
          <button>Back to Jobs</button>
        </Link>
        <Link to={`/jobs/edit/${this.props.job.id}`}>
          <button>Edit information</button>
        </Link>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getSingleJob: (id) => dispatch(getSingleJob(id)),
});

const mapStateToProps = state => ({
  job: state.jobs.singleJob
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowJobDetails);