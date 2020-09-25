import React, { useEffect, useState } from 'react';
import * as API from '../api/Works';
import { Container, Header, Content, List, Body, Title } from 'native-base';
import Items from './Items';

function Jobs() {

    const [jobList, setJobList] = useState([]);

    useEffect(() => {
        const getList = async () => {
            const res = await API.getWorks();
            setJobList(res.GetJobInfo.row);
        };

        getList();
    }, []);

    return (
        <Container>
            <Header>
                <Body>
                    <Title>일자리 구하기</Title>
                </Body>
            </Header>
            <Content>
                <List
                    dataArray={jobList}
                    renderRow={(job) => {
                        return <Items job={job} />
                    }}
                />
            </Content>
        </Container>
    );
};

export default Jobs;