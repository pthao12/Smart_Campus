#include <bits/stdc++.h>

using namespace std;
const int maxN = 5001;

string s;
int stringToInt(string s)
{
    int res = 0;
    for (int i = 0; i < s.size(); i++)
    {
        res = res * 10 + (s[i] - '0');
    }
    return res;
}

map<string, pair<string, string>> courseName;

void processCourseTable(string s)
{
    string tmp = "";
    int pos = 0;

    string ID;
    string name;
    string numCredits;

    for (int i = 0; i < s.size(); i++)
    {
        if (s[i] == '\t')
        {
            if (pos == 5)
                ID = tmp;
            else if (pos == 6)
                name = tmp;
            else if (pos == 8)
                numCredits = tmp;

            pos++;
            tmp = "";
        }
        else
        {
            tmp += s[i];
        }
    }

    courseName[ID] = make_pair(name, numCredits);
}

int main()
{
    freopen("data.txt", "r", stdin);
    freopen("courses.txt", "w", stdout);

    while (getline(cin, s))
    {
        processCourseTable(s);
    }

    for (auto it = courseName.begin(); it != courseName.end(); it++)
    {
        cout << "INSERT INTO courses VALUES ("
             << "'" << it->first << "', "
             << "'" << it->second.first << "', "
             << it->second.second << ", 1, 1" << ");" << '\n';
    }

    return 0;
}