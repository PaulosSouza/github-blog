import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Bio, Info, PersonData, ProfileContainer } from "./styles";
import {
  faBuilding,
  faUpRightFromSquare,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useContextSelector } from "use-context-selector";
import { GithubContext } from "@contexts/GithubContext";
import { memo } from "react";

function ProfileComponent() {
  const user = useContextSelector(GithubContext, (selector) => selector.user);

  return (
    <ProfileContainer variant="dark">
      <Avatar src={user.avatar_url} alt={user.name} />

      <Bio>
        <PersonData>
          <strong>{user.name}</strong>

          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            Github
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </a>
        </PersonData>

        <p>{user.bio}</p>

        <Info>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
            {user.login}
          </a>

          {user.company && (
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faBuilding} />
              {user.company}
            </a>
          )}

          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faUserGroup} />
            {user.followers} seguidores
          </a>
        </Info>
      </Bio>
    </ProfileContainer>
  );
}

export const Profile = memo(ProfileComponent);
