import React from 'react'
import { Jumbotrom, Button } from 'reactstrap'

const Home = () => {
    return (
        <div>
            <Jumbotrom>
                <h1 className="display-3">Olá Module Federation</h1>
                <hr className="my-2" />
                <p>Este componente é de outro App!</p>
                <p className="lead">
                    <Button color="primary">Botao</Button>
                </p>
            </Jumbotrom>
        </div>
    )
}

export default Home