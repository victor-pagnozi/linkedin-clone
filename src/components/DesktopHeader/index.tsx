import React from 'react';

import { Container, Wrapper, LinkedinIcon, SearchInput, HomeIcon, NotificationIcon, ProfileCircle, CaretDownIcon, SearchIcon } from './styles';

const DesktopHeader: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <div className="left">
                    <LinkedinIcon />

                    <SearchInput placeholder="Pesquisar">
                    </SearchInput>
                    <SearchIcon />
                </div>

                <div className="right">
                    <nav>
                        <button className="active">
                            <HomeIcon />
                            <span>Inicio</span>
                        </button>

                        <button>
                            <NotificationIcon />
                            <span>Notificações</span>
                        </button>

                        <button>
                            <ProfileCircle src="https://github.com/victor-pagnozi.png" />
                            <span>
                                Eu <CaretDownIcon />
                            </span>
                        </button>
                    </nav>
                </div>
            </Wrapper>
        </Container>
    );
}

export default DesktopHeader;